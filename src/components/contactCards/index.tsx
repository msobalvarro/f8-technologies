'use client'

import { PreferencesPropierties } from '@/utils/interfaces'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const itemClasess = 'bg-gray-900 hover:bg-slate-700 flex flex-1 flex-col items-center gap-3 bg-gray-800 rounded-lg p-4'

interface Props {
  data: PreferencesPropierties[]
}

export const ContactCard = ({ data }: Props) => {
  return (
    <div className='flex flex-col md:flex-row gap-8'>
      <a href='#' className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoMdMail className='text-3xl text-gray-500' />
        </span>

        <p className='text-xl'>Escribenos</p>
        <p className='text-sky-200'>{data?.find(e => e.key === 'emailContact')?.value}</p>
      </a>


      <a href='#' className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoCall className='text-3xl text-sky-700' />
        </span>

        <p className='text-xl'>Llámanos</p>
        <p className='text-sky-200'>{data?.find(e => e.key === 'phoneContact')?.value}</p>
      </a>


      <a href='#' className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoLogoWhatsapp className='text-3xl text-green-700' />
        </span>

        <p className='text-xl'>WhatsApp</p>
        <p className='text-sky-200'>{data?.find(e => e.key === 'whatsapp')?.value}</p>
      </a>
    </div>
  )
}