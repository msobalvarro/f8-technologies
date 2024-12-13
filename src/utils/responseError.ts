import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export const validateErrorResponse = (error: unknown) => {
  if (error instanceof ZodError) {
    return NextResponse.json({
      error: error.issues[0].message || error
    }, {
      status: 500
    })
  }

  return NextResponse.json({ error: String(error) }, { status: 500 })
}