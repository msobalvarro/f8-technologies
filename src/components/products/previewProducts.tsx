import useSWR from 'swr'
import Link from 'next/link'
import { fetcher } from '@/hooks'
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from './cardSkeleton'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import { ProductItem } from '.'

export const PreviewProducts = () => {
  const { data: products, isLoading } = useSWR<ProductsPropierties[]>('api/products', fetcher)

  return (
    <div className='flex flex-col my-10 gap-10 items-center md:p-12 sm:p-2'>
      {(isLoading && !products) && <ProductsSkeletons />}

      <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 w-full px-2'>
        {!isLoading && products?.map((product, index) => product.pinned && <ProductItem key={index} product={product} />)}
      </article>


      <Link className='self-end' href='/products'>
        <Button>
          Mostrar todos los productos F8
          <IoIosArrowForward />
        </Button>
      </Link>
    </div>
  )
}