'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductItem } from '@/components/card'
import { HeaderMain } from '@/components/header'
import { UiLayout } from '@/components/ui/layout'
import { fetchData } from '@/utils/fetch'
import { ProductsPropierties } from '@/utils/interfaces'
import { useActionState, useEffect } from 'react'
import { ProductsSkeletons } from '@/components/card/cardSkeleton'
import { ParallaxFrames } from '@/components/parallax'
import { Button } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'

const fetchDataAsync = async (): Promise<ProductsPropierties[]> => await fetchData('/products')


export default function Home() {
  const [response, formAction, isLoading] = useActionState<ProductsPropierties[]>(fetchDataAsync, [])

  useEffect(() => {
    formAction()
  }, [formAction])

  return (
    <UiLayout>
      <HeaderMain />
      <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner-2.png'
        alt='baner' />

      <ParallaxFrames />


      <div className='flex flex-col gap-10 items-center md:p-12 sm:p-2'>
        {(isLoading && !response) && <ProductsSkeletons />}

        <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 w-full'>
          {!isLoading && response?.map((product, index) => product.pinned && <ProductItem key={index} product={product} />)}
        </article>


        <Link className='self-end' href='/products'>
          <Button>
            Mostrar todos los productos F8
            <IoIosArrowForward />
          </Button>

        </Link>
      </div>

      <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner-3.png'
        alt='baner' />

    </UiLayout>
  )
}
