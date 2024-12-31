import { dbConnection } from '@/database'
import { NextRequest, NextResponse } from 'next/server'
import { connection } from 'mongoose'
import { ArchiveMessageProp, MessagesPropierties } from '@/utils/interfaces'
import { createMessage } from '@/utils/validations'
import { messageModel } from '@/models/messages'
import { ZodError } from 'zod'
import { getSocket } from '@/utils/socket'

export async function POST(request: NextRequest) {
  try {
    const params: MessagesPropierties = await request.json()
    const data = createMessage.parse(params)

    await dbConnection()
    const newMessage = await messageModel.create(data)

    getSocket().emit('newMessage', newMessage)
    
    return NextResponse.json(newMessage, { status: 200 })
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      return NextResponse.json({ error }, { status: 500 })
    }
  } finally {
    await connection.close()
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnection()

    const archived = request.nextUrl.searchParams.get('archived') === 'true'
    const data = await messageModel.find({ archived }).sort({ createdAt: -1 })
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.log(error)

    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { _id }: ArchiveMessageProp = await request.json()

    await dbConnection()
    const message = await messageModel.findById(_id)
    if (!message) throw new Error('Could not find a message')

    const messageUpdated = await messageModel.updateOne({ _id }, {
      archived: !Boolean(message.archived)
    })

    return NextResponse.json(messageUpdated, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { _id }: ArchiveMessageProp = await request.json()

    await dbConnection()
    const deleted = await messageModel.deleteOne({ _id })

    return NextResponse.json(deleted, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}
