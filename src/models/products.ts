import { model, models, Schema } from 'mongoose'
import { ProductsPropierties } from '@/utils/interfaces'

const product = new Schema<ProductsPropierties>(
  {
    description: { type: String, required: true },
    name: { type: String, required: true },
    archived: { type: Boolean, required: false, default: false },
    images: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export const productModel = models?.products || model('products', product)
