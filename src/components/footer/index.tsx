import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 md:flex-row justify-between items-center text-white p-12 w-full'>
      <figure>
        <Image
          src='/logo/logo.png'
          width={0}
          height={0}
          sizes='86px'
          style={{
            width: '86px',
            height: 'auto',
          }}
          alt='logo' />
      </figure>

      <div className='flex items-center md:gap-8 sm:text-sm sm:gap-4 xs:text-sm xs:gap-4'>
        <p>F8 Technologies {new Date().getFullYear()}</p>

        <p>Todos los derechos reservados</p>

        <Link href='/contact' className='text-sky-200 hover:underline'>Contacto</Link>
      </div>
    </footer>
  )
}