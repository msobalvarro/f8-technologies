import { dbConnection } from '@/database'
import {
  NewAndUpdateServiceProps,
  ServicesPropierties,
} from '@/utils/interfaces'
import { NextRequest, NextResponse } from 'next/server'
import { connection, disconnect, Types } from 'mongoose'
import { createAndUpdateServiceValidation } from '@/utils/validations'
import { validateErrorResponse } from '@/utils/responseError'
import { servicesModel } from '@/models/service'

export async function GET(request: NextRequest) {
  try {
    await dbConnection()
    const id = request.nextUrl.searchParams.get('id')
    const onlyPinned = request.nextUrl.searchParams.get('pinned')

    if (Boolean(onlyPinned)) {
      const services: ServicesPropierties[] = await servicesModel.find({ pinned: true }).sort({ createdAt: -1 })
      return NextResponse.json(services, { status: 200 })
    }

    if (id) {
      const product: NewAndUpdateServiceProps | null = await servicesModel.findById(id)
      return NextResponse.json(product, { status: 200 })
    }

    const products: NewAndUpdateServiceProps[] = await servicesModel.find().sort({ createdAt: -1 })
    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    console.log(error)

    return NextResponse.json({ error }, { status: 500 })
  } finally {
    await connection.close()
  }
}

export async function POST(request: NextRequest) {
  try {
    const params: ServicesPropierties = await request.json()
    createAndUpdateServiceValidation.parse(params)

    console.log(params)
    await dbConnection()

    const newService = await servicesModel.create(params)
    return NextResponse.json(newService)
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

    const deleted = await servicesModel.deleteOne({ _id: id })
    return NextResponse.json(deleted)
  } catch (error) {
    return validateErrorResponse(error)
  } finally {
    await disconnect()
  }
}

export async function PUT(request: NextRequest) {
  try {
    const params: NewAndUpdateServiceProps = await request.json()
    if (!Types.ObjectId.isValid(params.id)) throw new Error('id is not a valid')
    createAndUpdateServiceValidation.parse(params)
    await dbConnection()
    const serviceUpdated = await servicesModel.updateOne({ _id: params.id }, params)
    return NextResponse.json(serviceUpdated)
  } catch (error) {
    return validateErrorResponse(error)
  } finally {
    await disconnect()
  }
}
