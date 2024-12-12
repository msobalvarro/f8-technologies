import { z } from 'zod'

export const newProductValidation = z.object({
  name: z.string().min(3, 'Product name is required (min 3 characters)'),
  description: z.string().min(3, 'Product description is required (min 3 characters)'),
  unitPrice: z.number(),
  images: z.array(z.string())
})
