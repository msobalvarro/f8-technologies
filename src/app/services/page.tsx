import { UiLayout } from '@/components/ui/layout';
import Image from 'next/image';

export default function Services() {
  return (
    <UiLayout>
      <section className='p-10 rounded flex flex-col gap-8 bg-gray-800 shadow-xl'>
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

          <h1 className='text-3xl'>Cotiza nuestros servicios</h1>
          <p className='text-gray-500'>
            Hecha un vistazo a todos nuestros servicios, nos ajustamos a tus necesidades
          </p>
        </div>
      </section>
    </UiLayout>
  )
}