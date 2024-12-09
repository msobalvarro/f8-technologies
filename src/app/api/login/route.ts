import { generateToken } from '@/utils/validateToken'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = { token: generateToken({ name: 'sam' }) }
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
