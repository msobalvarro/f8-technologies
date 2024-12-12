import './globals.css'
import type { Metadata } from 'next'
import { NavbarUi } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'F8 Technologies',
  description: 'Especialistas en instalación de CCTV e infraestructura informática.',
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body className='bg-gray-900 bg-[url("/background-layer.svg")] bg-bottom bg-no-repeat '>
        <NavbarUi />

        {children}
        <Footer />
      </body>
    </html>
  )
}
