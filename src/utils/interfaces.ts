import { Types } from 'mongoose'

export interface FormContactState {
  fullName: string
  email: string
  phoneNumber: string
  message: string
}

export interface ProductsPropierties {
  name: string
  description: string
  unitPrice: number
  images: [string]
}

export interface DeleteProductProps {
  id: string
}

export type UpdateProductProps = DeleteProductProps & ProductsPropierties

export interface UsersPropierties {
  // _id: Types.ObjectId
  name: string
  username: string
  password: string
}

export interface LoginProps {
  username: string
  password: string
}

export interface PropsUseAxios {
  endpoint: string
}
