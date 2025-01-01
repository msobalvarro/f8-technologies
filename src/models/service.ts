import { ServicesPropierties } from '@/utils/interfaces'
import { models, Schema, model } from 'mongoose'

export const services = new Schema<ServicesPropierties>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    archived: { type: String, required: false, default: false },
    images: [String],
    pinned: { type: String, required: false, default: false },
  },
  {
    timestamps: false,
    versionKey: false,
  },
)

export const servicesModel = models?.service || model('services', services)
