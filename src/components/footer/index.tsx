import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='flex justify-between items-center text-white p-12 w-full'>
      <figure>
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
      </figure>

      <div className='flex items-center gap-8'>
        <p>F8 Technologies {new Date().getFullYear()}</p>

        <p>Todos los derechos reservados</p>

        <Link href='/contact' className='text-sky-200 hover:underline'>Contacto</Link>
      </div>
    </footer>
  )
}