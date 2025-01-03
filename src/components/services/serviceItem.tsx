import { ServiceResponse } from '@/utils/interfaces'
import { ProductSliderImage } from '../products/slider'

interface Props {
  service: ServiceResponse
}

export const ServiceItem = ({ service }: Props) => {
  return (
    <div className='flex items-center gap-10 flex-1'>
      <div className='flex flex-col gap-10'>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <ProductSliderImage images={service.images} />
    </div>
  )
}