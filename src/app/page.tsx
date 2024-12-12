import { CardItem } from '@/components/card'
import { HeaderMain } from '@/components/header'
import { UiButton } from '@/components/ui/button'
import { UiLayout } from '@/components/ui/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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

      <div className='flex flex-col gap-4 items-center p-12'>
        <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 w-full'>
          <CardItem
            title='Cámara IP Fish Eye 5MP'
            description='La cámara IP Fish Eye 5MP es un dispositivo avanzado de seguridad con un diseño panorámico que ofrece una visión de 360 grados. Su sensor de 5 megapíxeles garantiza imágenes nítidas y detalladas tanto de día como de noche. Gracias a su tecnología Starlight, proporciona una excelente visión nocturna con una claridad excepcional en condiciones de baja iluminación, cubriendo hasta 10 metros de distancia.'
            imageUrl='/card/imageCard1.jpg'
            textButton='Cotizar'
            href='/'
          />

          <CardItem
            title='Cámara IP 5MP'
            description='La cámara IP 5MP es un dispositivo de seguridad de alta calidad diseñado para brindar imágenes claras y detalladas en cualquier condición, ideal para vigilancia en exteriores e interiores. Con su sensor de 5 megapíxeles, captura video en alta definición, ofreciendo una excelente resolución para identificar detalles importantes.'
            imageUrl='/card/imageCard2.jpg'
            textButton='Cotizar'
            href='/'
          />
        </article>

        <Link href='/products'>
          <UiButton type='pink'>Ver mas</UiButton>
        </Link>
      </div>

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
