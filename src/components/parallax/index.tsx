import Image from 'next/image'
import { useEffect, useState } from 'react'

const MAX_FRAMES = 104
const MAX_SCROLL = (window.innerHeight / 2)

export const ParallaxFrames = () => {
  const [maxScroll, setScroll] = useState(MAX_SCROLL)
  const [imageFrame, setFrame] = useState<string>('001')

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScroll(window.innerHeight / 2)
    })

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
      const scrollFraction = scrollPosition / maxScroll
      const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1

      if (frame > 1) {
        setFrame('001')
      }

      if (Math.abs(frame) < MAX_FRAMES) {
        setFrame(frame.toString().padStart(3, '0'))
      }
    })
  })

  // console.log(imageFrame)


  // return (
  //   <p>{imageFrame}</p>
  // )

  return (
    <article className='bg-white h-full'>
      <Image
        alt='Fortinet'
        width={0}
        height={0}
        sizes='100vw'
        style={{
          width: '100vw',
          objectFit: 'cover',
          height: '100vh',
        }}
        src={`/fortinet-frames/ezgif-frame-${imageFrame}.png`} />
    </article>
  )
}