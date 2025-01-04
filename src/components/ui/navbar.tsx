'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const gradientNavbar = 'bg-gradient-to-r from-sky-700 to-cyan-600'

const clasess = 'w-full flex flex-col md:flex-row md:items-center md:justify-between py-4 px-8 sm:flex-column'
const routes = [
  { path: '/', name: 'Inicio' },
  { path: '/products', name: 'Productos' },
  { path: '/services', name: 'Servicios' },
  { path: '/contact', name: 'Contacto' },
]

export const NavbarUi = () => {
  const pathname = usePathname()

  return (
    <nav className={`${clasess} ${gradientNavbar}`}>
      <figure>
        <Link href='/'>
          <Image
            width={0}
            height={0}
            sizes='100vw'
            alt='logo'
            className='md:w-64 h-auto object-fit'
            src='/logo/F8_Horizontal_Logo.png' />
        </Link>
      </figure>

      <div className='flex gap-6 items-center flex-1 justify-center md:justify-end'>
        {routes.map((route, k) => (
          <Link
            key={k}
            className={`hover:text-white/50 ${clsx({
              'border-b-2': pathname === route.path,
            })}`}
            href={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}