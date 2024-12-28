'use client'

import { FormContact } from '@/components/contact'
import { ContactCard } from '@/components/contactCards'
import { UiLayout } from '@/components/ui/layout'
import { fetcher } from '@/hooks'
import { PreferencesPropierties } from '@/utils/interfaces'
import { useMemo } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

export default function ContactView() {
  const { data } = useSWR<PreferencesPropierties[]>('api/preferences', fetcher)
  const memoizedPreference = useMemo(() => data, [data])

  return (
    <UiLayout addClassName='p-10'>
      <section className='p-10 rounded flex flex-col gap-8 bg-gray-800 shadow-xl'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Image
            src='/logo/logo.png'
            width={0}
            height={0}
            sizes='128px'
            style={{
              width: '128px',
              height: 'auto',
            }}
            alt='logo' />

          <h1 className='text-3xl'>Envía un Mensaje Ahora</h1>
          <p className='text-gray-500'>
            ¿Tienes preguntas o necesitas asistencia? Contáctanos a través de formulario, WhatsApp ó correo electrónico para obtener soporte rápido.
          </p>
        </div>

        <FormContact />

        <hr className='border-slate-100' />

        {memoizedPreference && <ContactCard data={memoizedPreference} />}
      </section>
    </UiLayout>
  )
}