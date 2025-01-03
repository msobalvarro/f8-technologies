import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const brands = [
  'anydesk',
  'axis',
  'cablix',
  'cisco',
  'dahua',
  'eset',
  'fortinet',
  'microsoft',
  'mikrotik',
  'panduit',
  'secolarm-enforcer',
  'siemon',
  'ubiquiti',
]

interface Props {
  addClass?: string
}

export const BrandMarquee = ({addClass}:Props) => {
  return (
    <Marquee className={`p-10 overflow-hidden w-full ${addClass}`}>
      {brands.map((brand, index) => (
        <Image
          width={0}
          height={0}
          unoptimized
          className='w-32 md:w-48 mx-10'
          key={index}
          src={`/brands/${brand}.svg`}
          alt={brand} />
      ))}
    </Marquee>
  )
}