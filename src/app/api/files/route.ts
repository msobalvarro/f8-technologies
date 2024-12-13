import { NextRequest, NextResponse } from 'next/server'
import { existsSync, mkdirSync } from 'fs'
import { writeFile } from 'fs/promises'
import path from 'path'

const uploadDir = './uploads'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    if (!file || !(file instanceof File)) throw new Error('No files received')

    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true })
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    await writeFile(
      path.join(
        process.cwd(), `${uploadDir}/${crypto.randomUUID()}${path.extname(file.name)}`),
      buffer
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}