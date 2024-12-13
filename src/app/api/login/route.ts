import { dbConnection } from '@/database'
import { usersModel } from '@/models/user'
import { LoginProps } from '@/utils/interfaces'
import { validateErrorResponse } from '@/utils/responseError'
import { generateToken, newSha256 } from '@/utils/validateToken'
import { loginValidation } from '@/utils/validations'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const params: LoginProps = await request.json()
    const data: LoginProps = loginValidation.parse(params)

    await dbConnection()

    const user = await usersModel.findOne({
      username: data.username,
      password: newSha256(data.password)
    })

    if (!user) throw new Error('user not found')

    const response = { token: generateToken({ _id: user._id }) }
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return validateErrorResponse(error)
  }
}
