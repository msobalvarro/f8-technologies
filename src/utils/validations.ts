import { z } from 'zod'

export const createAndUpdateProductValidation = z.object({
  name: z.string({
    message: 'Product name is required (min 3 characters)'
  }).min(3),
  description: z.string({
    message: 'Product description is required (min 3 characters)'
  }).min(3),
  images: z.array(
    z.string({
      message: 'image param must be string'
    }),
    {
      message: 'images is required'
    }
  ),
  archived: z.boolean({message: 'archived is required' }),
})

export const createUserValidation = z.object({
  name: z.string({ message: 'name is required' }),
  username: z.string({ message: 'username is required' }),
  password: z.string({ message: 'password is required' }),
})

export const loginValidation = z.object({
  username: z.string({ message: 'username is required' }),
  password: z.string({ message: 'password is required' }),
})
