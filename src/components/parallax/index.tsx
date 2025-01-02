import Image from 'next/image'
import { useState } from 'react'

const MAX_FRAMES = 104

export const ParallaxFrames = () => {
  const [imageFrame, setFrame] = useState<string>('001')
  const MAX_SCROLL = (document.documentElement.scrollHeight - (window.innerHeight))

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    const scrollFraction = (scrollPosition / MAX_SCROLL) * 2
    const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1

    if (Math.abs(frame) <= MAX_FRAMES) {
      setFrame(frame.toString().padStart(3, '0'))
    }
  })


  return (
    <article className='bg-white h-full'>
      <Image
        alt='Fortinet'
        width={0}
        height={0}
        sizes='100vw'
        className='object-fit md:h-screen md:w-screen sm:w-screen ms:h-screen'
        src={`/fortinet-frames/ezgif-frame-${imageFrame}.png`} />
    </article>
  )
}