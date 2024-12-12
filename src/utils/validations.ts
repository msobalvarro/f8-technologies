import { z } from 'zod'

export const newProductValidation = z.object({
  name: z.string({
    message: 'Product name is required (min 3 characters)'
  }).min(3),
  description: z.string({
    message: 'Product description is required (min 3 characters)'
  }).min(3),
  unitPrice: z.number({
    message: 'unit price is required'
  }),
  images: z.array(
    z.string({
      message: 'image param must be string'
    }),
    {
      message: 'images is required'
    }
  )
})
