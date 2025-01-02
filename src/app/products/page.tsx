'use client'

import { ProductItem } from '@/components/card'
import { UiLayout } from '@/components/ui/layout'
import { ProductsPropierties } from '@/utils/interfaces'
import { ProductsSkeletons } from '@/components/card/cardSkeleton'
import Image from 'next/image'
import useSWR from 'swr'
import { fetcher } from '@/hooks'
import { UiTitle } from '@/components/ui/title'

export default function Products() {
  const { data: products, isLoading } = useSWR<ProductsPropierties[]>('api/products', fetcher)

  return (
    <UiLayout>
      <UiTitle
        title='Nuestros Productos'
        description='Somos importadores de marcas oficiales, nuestra calidad en nuestro productos nos define como empresa'
      />

      {/* <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner-3.png'
        alt='baner' /> */}

      {(!products && isLoading) && <ProductsSkeletons />}

      <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-10 w-full'>
        {products?.map(product => !product.archived && (
          <ProductItem key={crypto.randomUUID()} product={product} />
        ))}
      </article>

      {/* <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner.png'
        alt='baner' /> */}
    </UiLayout>
  )
}