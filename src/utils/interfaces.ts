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
  name: string
  username: string
  password: string
}
