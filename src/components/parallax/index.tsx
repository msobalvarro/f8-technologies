import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BrandMarquee } from '../ui/marquee'

const MAX_FRAMES = 104

interface Props {
  scrollPosition: number
}

export const ParallaxFrames = ({ scrollPosition }: Props) => {
  const [imageFrame, setFrame] = useState<string>('001')
  const scrollRef = useRef<HTMLDivElement>(null)
  const MAX_SCROLL = ((scrollRef.current?.scrollHeight || 0) + (scrollRef.current?.clientHeight || 0))

  console.log(MAX_SCROLL)

  useEffect(() => {
    const scrollFraction = (scrollPosition / MAX_SCROLL) * 2
    const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1

    // console.log(frame)
    if (Math.abs(frame) <= MAX_FRAMES) {
      setFrame(frame.toString().padStart(3, '0'))
    }
  }, [scrollPosition, MAX_SCROLL])


  console.log(imageFrame)

  return (
    <article ref={scrollRef} className='bg-white w-full relative overflow-hidden'>
      <Image
        alt='Fortinet'
        width={0}
        height={0}
        unoptimized
        priority
        className='w-16 lg:w-32 top-10 left-10 object-fit absolute'
        src='/logo/F8_Logo_Basic_Variant.png' />

      <Image
        alt='Fortinet'
        width={0}
        height={0}
        sizes='100vw'
        // unoptimized
        className='object-fit w-screen'
        src={`/fortinet-frames/ezgif-frame-${imageFrame}.png`} />

      <BrandMarquee addClass='absolute left-0 bottom-0' />

    </article>
  )
}