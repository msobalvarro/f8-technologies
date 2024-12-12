import { dbConnection } from '@/database'
import { productModel } from '@/models/products'
import { ProductsPropierties } from '@/utils/interfaces'
import { NextRequest, NextResponse } from 'next/server'
import { connection, disconnect } from 'mongoose'
import { newProductValidation } from '@/utils/validations'
import { ZodError } from 'zod'

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

export async function POST(request: NextRequest) {
  try {
    const params: ProductsPropierties = await request.json()
    const data = newProductValidation.parse(params)
    await dbConnection()

    const newProduct = await productModel.create(data)
    return NextResponse.json(newProduct)
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        error: error.issues[0].message || error
      }, {
        status: 500
      })
    } else {
      return NextResponse.json({ error }, { status: 500 })
    }
  } finally {
    await disconnect()
  }
}
