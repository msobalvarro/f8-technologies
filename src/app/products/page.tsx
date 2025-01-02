'use client'

import { ProductItem } from '@/components/card'
import { UiLayout } from '@/components/ui/layout'
import { fetchData } from '@/utils/fetch'
import { ProductsPropierties } from '@/utils/interfaces'
import { useActionState, useEffect } from 'react'
import { ProductsSkeletons } from '@/components/card/cardSkeleton'
import Image from 'next/image'


const fetchDataAsync = () => fetchData('/products')
export default function Products() {
  const [response, fetchAction, isLoading] = useActionState<ProductsPropierties[]>(fetchDataAsync, [])

  useEffect(() => {
    fetchAction()
  }, [])

  return (
    <UiLayout>
      <div className='flex flex-col items-center gap-2 text-center p-12'>
        <Image
          src='/logo/logo.png'
          width={0}
          height={0}
          sizes='128px'
          style={{
            width: '128px',
            height: 'auto',
          }}
          alt='logo' />

        <h1 className='text-3xl'>Nuestros Productos</h1>
        <p className='text-gray-500'>
          Somos importadores de marcas oficiales, nuestra calidad en nuestro productos nos define como empresa
        </p>
      </div>

      <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner-3.png'
        alt='baner' />

      {(!response) && <ProductsSkeletons />}

      <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-10 w-full'>
        {response.map(product => !product.archived && (
          <ProductItem key={crypto.randomUUID()} product={product} />
        ))}
      </article>

      <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner.png'
        alt='baner' />
    </UiLayout>
  )
}