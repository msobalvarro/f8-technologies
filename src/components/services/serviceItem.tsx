import { ServiceResponse } from '@/utils/interfaces'

interface Props {
  service: ServiceResponse
}

export const ServiceItem = ({ service }: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-10'>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  )
}