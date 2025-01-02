'use client'

import { ProductItem } from '@/components/card'
import { UiLayout } from '@/components/ui/layout'
import { fetchData } from '@/utils/fetch'
import { ProductsPropierties } from '@/utils/interfaces'
import { useActionState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { Skeleton } from '@mui/material'

const fetchDataAsync = async (): Promise<ProductsPropierties[]> => await toast.promise(fetchData('/products'), {
  pending: 'Obteniendo Productos'
})

export default function Products() {
  const [response, fetchAction, isLoading] = useActionState<ProductsPropierties[]>(fetchDataAsync, [])

  useEffect(() => {
    fetchAction()
  }, [fetchAction])

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

      {isLoading && (
        <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-12 w-full'>
          <Skeleton className='rounded-xl' height={512} variant='rectangular' />
          <Skeleton className='rounded-xl' height={512} variant='rectangular' />
        </article>
      )}

      <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-12 w-full'>
        <>
          {response.map(product => !product.archived && (
            <ProductItem key={crypto.randomUUID()} product={product} />
          ))}

          {/* <CardItem
            title='Punto de acceso wifi ubiquiti'
            description='El punto de acceso WiFi Ubiquiti con tecnología WiFi 6 es una solución avanzada diseñada para ofrecer conexiones inalámbricas de alta velocidad, mayor capacidad y una cobertura más amplia. Equipado con la última generación WiFi 6 (802.11ax), este dispositivo es ideal para hogares, oficinas y espacios comerciales que demandan una red confiable y eficiente.'
            imageUrl='/card/imageCard3.jpg'
            textButton='Cotizar'
            href='/'
          />

          <CardItem
            title='Control de acceso con con reconocimiento facial'
            description='El control de acceso con reconocimiento facial es un sistema de seguridad avanzado diseñado para gestionar entradas y salidas de manera precisa y eficiente mediante la identificación biométrica. Este dispositivo utiliza tecnología de reconocimiento facial para autenticar usuarios en tiempo real, ofreciendo una solución segura, rápida y sin contacto para controlar el acceso a áreas restringidas.'
            imageUrl='/card/imageCard4.jpg'
            textButton='Cotizar'
            href='/'
          /> */}
        </>
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