import { ServicesPropierties } from '@/utils/interfaces'
import { models, Schema, model } from 'mongoose'

export const services = new Schema<ServicesPropierties>(
  {
    title: { type: String, required: true },
    descriptions: { type: String, required: true }
  },
  {
    timestamps: false,
    versionKey: false,
  },
)

export const servicesModel = models?.service || model('services', services)
