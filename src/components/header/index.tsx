import Image from 'next/image'
import { gradientNavbar } from '../navbar'

export const HeaderMain = () => {
  return (
    <section className={`w-full md:p-10 p-2 min-h-80 flex flex-col gap-10 ${gradientNavbar}`}>
      <div className='flex flex-col text-center gap-8 items-center'>
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


        <h1 className='text-white md:text-5xl text-2xl font-bold mx-10'>Especialistas en instalación de CCTV e infraestructura informática.</h1>
        <p className='md:text-xl text-lg'>
          Lideres en tecnlogīa, servicios integrales de control y monitoro
        </p>


        {/* <div className='flex'>
          <UiButton type='purple' className='self-center'>Cotiza tus Servicios</UiButton>
          <UiButton type='pink' className='self-center'>Contactanos</UiButton>
        </div> */}
      </div>
    </section>
  )
}
