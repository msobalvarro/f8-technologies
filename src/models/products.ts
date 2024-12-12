import { model, Schema } from 'mongoose'
import { ProductsPropierties } from '@/utils/interfaces'

const product = new Schema<ProductsPropierties>(
  {
    description: { type: String, required: true },
    name: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    images: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const productModel = model('products', product)
