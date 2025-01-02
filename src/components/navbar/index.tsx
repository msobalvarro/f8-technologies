import Image from 'next/image'
import Link from 'next/link'

export const gradientNavbar ='bg-gradient-to-r from-sky-700 to-cyan-600'

const clasess = 'w-full flex flex-col md:flex-row md:items-center md:justify-between py-4 px-8 sm:flex-column'

export const NavbarUi = () => {
  return (
    <nav className={`${clasess} ${gradientNavbar}`}>
      <figure>
        <Image
          width={0}
          height={0}
          sizes='100vw'
          alt='logo'
          className='md:w-64 h-auto object-fit'
          src='/logo/F8_Horizontal_Logo.png' />
      </figure>

      <div className='flex gap-6 items-center flex-1 justify-center md:justify-end'>
        <Link className='hover:text-white/50' href='/'>Inicio</Link>
        <Link className='hover:text-white/50' href='/products'>Productos</Link>
        <Link className='hover:text-white/50' href='/services'>Servicios</Link>
        <Link className='hover:text-white/50' href='/contact'>Contacto</Link>
      </div>
    </nav>
  )
}