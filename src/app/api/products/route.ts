import { dbConnection } from '@/database'
import { productModel } from '@/models/products'
import { ProductsPropierties } from '@/utils/interfaces'
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export async function GET() {
  try {
    await dbConnection()
    const products: ProductsPropierties[] = await productModel.find()

    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await mongoose.connection.close()
  }
}

