import { dbConnection } from '@/database'
import { usersModel } from '@/models/user'
import { UsersPropierties } from '@/utils/interfaces'
import { validateErrorResponse } from '@/utils/responseError'
import { newSha256 } from '@/utils/validateToken'
import { createUserValidation } from '@/utils/validations'
import { disconnect } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const params: UsersPropierties = await request.json()
    const { name, username, password } = createUserValidation.parse(params)

    await dbConnection()
    
    const newUser = await usersModel.create({
      name,
      username,
      password: newSha256(password),
    })
    return NextResponse.json(newUser)
  } catch (error) {
    return validateErrorResponse(error)
  } finally {
    disconnect()
  }
}