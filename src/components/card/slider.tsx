import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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

export const ProductSliderImage = ({ images }: Props) => (
  <Slider {...settings}>
    {images.map((image, index) => (
      <div key={index}>
        <Image
          height={0}
          width={0}
          sizes='512px'
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: 512,
            objectFit: 'cover',
          }}
          src={`/api/images/${image}`}
          alt='image' />
      </div>
    ))}
  </Slider>

)