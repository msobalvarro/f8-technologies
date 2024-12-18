

import Image from 'next/image'
import { UiButton } from '../ui/button'

interface Props {
  imageUrl: string
  title: string
  description: string
  textButton: string
  href: string
}


export const CardItem = (props: Props) => {
  return (
    <div className='bg-white transition-all border-2 border-gray-200 hover:border-slate-500 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700'>
      <Image
        height={0}
        width={0}
        sizes='512px'
        style={{
          width: 'auto',
          height: '512px',
          objectFit: 'cover',
        }}
        src={props.imageUrl}
        alt='image' />

      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {props.title}
        </h5>

        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {props.description}
        </p>

        <UiButton type='purple'>{props.textButton}</UiButton>
      </div>
    </div>
  )
}