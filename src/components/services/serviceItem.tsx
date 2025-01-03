import { ServiceResponse } from '@/utils/interfaces'
import { ProductSliderImage } from '../products/slider'

interface Props {
  service: ServiceResponse
}

export const ServiceItem = ({ service }: Props) => {
  return (
    <div className='flex items-center gap-10 flex-1 p-12 relative w-full overflow-hidden'>

      <div className='absolute inset-0 bg-cover scale-110 bg-center blur-lg z-0'
        style={{
          backgroundImage: `url("/api/images/${service.images[0]}")`,
        }} />
      <div className='absolute inset-0 bg-black bg-opacity-80 z-10' />

      <div className='flex flex-col gap-6 flex-1 z-20'>
        <h3 className='text-2xl font-bold'>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <div className='w-96 z-20'>
        <ProductSliderImage images={service.images} />
      </div>
    </div>
  )
}