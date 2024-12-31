import { ServicesPropierties } from '@/utils/interfaces'
import { Schema } from 'mongoose'

export const service = new Schema<ServicesPropierties>(
  {
    title: { type: String, required: true },
    descriptions: { type: String, required: true }
  },
  {
    timestamps: false,
    versionKey: false,
  },
)