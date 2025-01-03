'use client'

import Image from 'next/image'
import { HeaderMain } from '@/components/ui/hero'
import { UiLayout } from '@/components/ui/layout'
import { ParallaxFrames } from '@/components/parallax'
import { PreviewProducts } from '@/components/products/previewProducts'
import { useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  document.addEventListener('scroll', () => {
    setScrollY(window.scrollY)
  })

  return (
    <UiLayout>
      <HeaderMain />

      <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner-2.png'
        alt='baner' />

      <ParallaxFrames scrollPosition={scrollY} />

      <PreviewProducts />

      <Image
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '100%' }}
        src='/banner/art-banner-3.png'
        alt='baner' />

    </UiLayout>
  )
}
