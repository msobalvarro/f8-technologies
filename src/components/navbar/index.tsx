import Image from 'next/image'
import Link from 'next/link'

export const NavbarUi = () => {
  return (
    <nav className='w-full flex items-center justify-between py-4 px-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <figure>
        <Image width={200} height={100} alt='logo' src='/logo/F8_Horizontal_Logo.png' />
      </figure>

      <div className='flex gap-6 text-lg'>
        <Link className='hover:text-white/50' href='/'>Inicio</Link>
        <Link className='hover:text-white/50' href='/products'>Productos</Link>
        <Link className='hover:text-white/50' href='/services'>Servicios</Link>
        <Link className='hover:text-white/50' href='/contact'>Contacto</Link>
      </div>
    </nav>
  )
}