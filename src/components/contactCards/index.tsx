'use client'

import { PreferencesPropierties } from '@/utils/interfaces'
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const itemClasess = 'border border-2 border-2 border-slate-700 hover:border-slate-500 flex flex-1 flex-col items-center gap-3 bg-gray-800 rounded-lg p-4'

interface Props {
  data: PreferencesPropierties[]
}

export const ContactCard = ({ data }: Props) => {
  return (
    <div className='flex gap-8'>
      <a href='#' className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoMdMail className='text-3xl text-gray-500' />
        </span>

        <p className='text-xl'>Escribenos</p>
        <p className='text-sky-700'>{data?.find(e => e.key === 'emailContact')?.value}</p>
      </a>


      <a href='#' className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoCall className='text-3xl text-sky-700' />
        </span>

        <p className='text-xl'>Llámanos</p>
        <p className='text-sky-700'>{data?.find(e => e.key === 'phoneContact')?.value}</p>
      </a>


      <a href='#' className={itemClasess}>
        <span className='bg-white rounded-full p-4'>
          <IoLogoWhatsapp className='text-3xl text-green-700' />
        </span>

        <p className='text-xl'>WhatsApp</p>
        <p className='text-sky-700'>{data?.find(e => e.key === 'whatsapp')?.value}</p>
      </a>
    </div>
  )
}