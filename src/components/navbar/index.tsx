import Image from 'next/image'
import Link from 'next/link'

export const NavbarUi = () => {
  return (
    <nav className='w-full flex items-center justify-between'>
      <figure>
        <Image width={200} height={100} alt='logo' src='/logo/F8_Horizontal_Logo.png' />
      </figure>

      <div className='flex gap-4 text-xl'>
        <Link href='/'>Inicio</Link>
        <Link href='/products'>Productos</Link>
        <Link href='/services'>Servicios</Link>
        <Link href='/contact'>Contacto</Link>
      </div>
    </nav>
  )
}