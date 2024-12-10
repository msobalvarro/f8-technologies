import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

export const ContactCard = () => {
  return (
    <div className='flex gap-8'>
      <a href='#' className='hover:bg-gray-900 flex flex-1 flex-col items-center gap-4 bg-gray-800 rounded-lg p-4'>
        <span className='bg-white rounded-full p-4'>
          <IoMdMail className='text-3xl text-rose-600' />
        </span>

        <p className='text-xl'>Escribenos</p>
        <p className='text-sky-700'>info@f8technologies.com</p>
      </a>


      <a href='#' className='hover:bg-gray-900 flex flex-1 flex-col items-center gap-4 bg-gray-800 rounded-lg p-4'>
        <span className='bg-white rounded-full p-4'>
          <IoCall className='text-3xl text-sky-700' />
        </span>

        <p className='text-xl'>Llámanos</p>
        <p className='text-sky-700'>+(505) 8242 4540</p>
      </a>


      <a href='#' className='hover:bg-gray-900 flex flex-1 flex-col items-center gap-4 bg-gray-800 rounded-lg p-4'>
        <span className='bg-white rounded-full p-4'>
          <IoLogoWhatsapp className='text-3xl text-green-700' />
        </span>

        <p className='text-xl'>WhatsApp</p>
        <p className='text-sky-700'>+(505) 8242 4540</p>
      </a>
    </div>
  )
}