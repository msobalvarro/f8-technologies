'use client'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Slider from 'react-slick'

interface Props {
  images: string[]
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const ProductSliderImage = ({ images }: Props) => {
  if (images.length === 1) {
    return (
      <Image
        width={0}
        height={0}
        unoptimized
        className='w-full h-96 object-cover'
        src={`/api/images/${images[0]}`}
        alt='image' />
    )
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Image
            height={0}
            width={0}
            // sizes='64px'
            unoptimized
            style={{
              width: '100%',
            }}
            className='h-96 object-cover'
            src={`/api/images/${image}`}
            alt='image' />
        </div>
      ))}
    </Slider>
  )
}
