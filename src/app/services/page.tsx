'use client'

import useSWR from 'swr'
import { ServiceItem } from '@/components/services/serviceItem'
import { UiLayout } from '@/components/ui/layout'
import { UiTitle } from '@/components/ui/title'
import { fetcher } from '@/hooks'
import { ServiceResponse } from '@/utils/interfaces'

export default function Services() {
  const { data } = useSWR<ServiceResponse[]>('api/services', fetcher)

  return (
    <UiLayout>
      <UiTitle
        title='Cotiza nuestros servicios'
        description='Hecha un vistazo a todos nuestros servicios, nos ajustamos a tus necesidades'
      />


      <div className='flex flex-col w-full'>
        {data?.map((service, index) => (<ServiceItem key={index} service={service} />))}
      </div>
    </UiLayout>
  )
}