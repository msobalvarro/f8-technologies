

import Image from 'next/image'
import { UiButton } from '../ui/button'
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductSliderImage } from './slider'

interface Props {
  product: ProductsPropierties
}


export const ProductItem = ({ product }: Props) => {
  return (
    <div className='bg-white transition-all border-2 border-gray-200 hover:border-slate-500 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700'>
      {product?.images.length === 1 && (
        <Image
          height={0}
          width={0}
          sizes='512px'
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 512,
            objectFit: 'cover',
          }}
          src={`/api/images/${product.images[0]}`}
          alt='image' />
      )}
      {product?.images.length > 1 && (
        <ProductSliderImage images={product.images} />
      )}

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {product.name}
        </h5>

        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {product.description}
        </p>

        <UiButton type='purple'>
          Cotizar
        </UiButton>
      </div>
    </div>
  )
}