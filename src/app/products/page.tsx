import { CardItem } from '@/components/card';
import { UiLayout } from '@/components/ui/layout'
import Image from 'next/image';

export default function Products() {
  return (
    <UiLayout addClassName='p-10'>
      <div className='flex flex-col items-center gap-2 text-center'>
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

      <article className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-12 w-full'>
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

        <CardItem
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
        />
      </article>
    </UiLayout>
  )
}