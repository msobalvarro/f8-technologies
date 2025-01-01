import { dbConnection } from '@/database'
import { productModel } from '@/models/products'
import {
  ProductsPropierties,
  UpdateProductProps
} from '@/utils/interfaces'
import { NextRequest, NextResponse } from 'next/server'
import { connection, disconnect, Types } from 'mongoose'
import { createAndUpdateProductValidation } from '@/utils/validations'
import { validateErrorResponse } from '@/utils/responseError'

export async function GET(request: NextRequest) {
  try {
    await dbConnection()
    const id = request.nextUrl.searchParams.get('id')

    if (id) {
      const product: ProductsPropierties | null = await productModel.findById(id)
      return NextResponse.json(product, { status: 200 })
    } else {
      const products: ProductsPropierties[] = await productModel.find().sort({ createdAt: -1 })
      return NextResponse.json(products, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}

export async function POST(request: NextRequest) {
  try {
    const params: ProductsPropierties = await request.json()
    createAndUpdateProductValidation.parse(params)

    console.log(params)
    await dbConnection()

    const newProduct = await productModel.create(params)
    return NextResponse.json(newProduct)
  } catch (error) {
    return validateErrorResponse(error)
  } finally {
    await disconnect()
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id || !Types.ObjectId.isValid(id)) throw new Error('id is not a valid')

    await dbConnection()

    const deleted = await productModel.deleteOne({ _id: id })
    return NextResponse.json(deleted)
  } catch (error) {
    return validateErrorResponse(error)
  } finally {
    await disconnect()
  }
}

export async function PUT(request: NextRequest) {
  try {
    const params: UpdateProductProps = await request.json()
    const data = createAndUpdateProductValidation.parse(params)
    if (!Types.ObjectId.isValid(params.id)) throw new Error('id is not a valid')

    await dbConnection()

    const productUpdated = await productModel.updateOne(
      { _id: params.id },
      {
        description: data.description,
        name: data.name,
        archived: params.archived,
        pinned: params.pinned,
        images: data.images,
      }
    )
    return NextResponse.json(productUpdated)
  } catch (error) {
    return validateErrorResponse(error)
  } finally {
    await disconnect()
  }
}
