import { dbConnection } from '@/database'
import { NextRequest, NextResponse } from 'next/server'
import { connection } from 'mongoose'
import { MessagesPropierties } from '@/utils/interfaces'
import { createMessage } from '@/utils/validations'
import { messageModel } from '@/models/messages'

export async function POST(request: NextRequest) {
  try {
    const params: MessagesPropierties = await request.json()    
    const data = createMessage.parse(params)

    await dbConnection()
    const newMessage = await messageModel.create(data)
    return NextResponse.json(newMessage, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}


export async function GET() {
  try {
    await dbConnection()
    const data = await messageModel.find().sort('created')
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}
