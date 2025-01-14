import { ProductsPropierties } from '@/utils/interfaces'
import { ProductSliderImage } from './slider'
import { Button } from '@mui/material'
import Link from 'next/link'

interface Props {
  product: ProductsPropierties
}


export const ProductItem = ({ product }: Props) => {
  return (
    <div className='bg-white transition-all border-2 border-gray-200 hover:border-slate-500 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700'>
      <ProductSliderImage images={product.images} />

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {product.name}
        </h5>

        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {product.description}
        </p>

        <div className='flex justify-end'>
          <Link href={`/contact?product=${product.name}`}>
            <Button>
              Cotizar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}