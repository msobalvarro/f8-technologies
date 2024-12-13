import { dbConnection } from '@/database'
import { productModel } from '@/models/products'
import {
  DeleteProductProps,
  ProductsPropierties,
  UpdateProductProps
} from '@/utils/interfaces'
import { NextRequest, NextResponse } from 'next/server'
import { connection, disconnect, Types } from 'mongoose'
import { createAndUpdateProductValidation } from '@/utils/validations'
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
    const data = createAndUpdateProductValidation.parse(params)
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

export async function DELETE(request: NextRequest) {
  try {
    const params: DeleteProductProps = await request.json()
    if (!Types.ObjectId.isValid(params.id)) throw new Error('id is not a valid')

    await dbConnection()

    const deleted = await productModel.deleteOne({ _id: params.id })
    return NextResponse.json(deleted)
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
        unitPrice: data.unitPrice,
        images: data.images,
      }
    )
    return NextResponse.json(productUpdated)
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
