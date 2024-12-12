import { dbConnection } from '@/database'
import { productModel } from '@/models/products'
import { ProductsPropierties } from '@/utils/interfaces'
import { NextResponse } from 'next/server'
import { connection } from 'mongoose'
import { ZodError } from 'zod'
import { newProductValidation } from '@/utils/validations'

export async function GET() {
  try {
    await dbConnection()
    const products: ProductsPropierties[] = await productModel.find()

    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}

export async function POST(request: Request) {
  try {
    const data = newProductValidation.parse(request.body)
    return NextResponse.json(data)
  } catch (error) {
    if (error instanceof ZodError) {
      // Enviar errores de validación
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
  }
}
