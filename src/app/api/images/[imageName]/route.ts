import { createReadStream } from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import { resolve } from 'path'
import { ReadableStream } from 'web-streams-polyfill/ponyfill'

export async function GET(request: NextRequest, { params }: { params: { imageName: string } }) {
  const imagePath = resolve(`${process.env.PUBLIC_FOLDER}/${params.imageName}`)
  try {
    const fs = await import('fs/promises')
    await fs.access(imagePath)

    const stream = createReadStream(imagePath)

    const readableStream = new ReadableStream({
      start(controller) {
        stream.on('data', chunk => controller.enqueue(chunk))
        stream.on('end', () => controller.close())
        stream.on('error', err => controller.error(err))
      }
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'image/jpeg', // Cambia según el tipo de imagen
      },
    })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
