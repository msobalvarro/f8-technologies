'use client'

import useSWR from 'swr'
import { ContactForm } from '@/components/contact/contactForm'
import { ContactCard } from '@/components/contact/contactCard'
import { UiLayout } from '@/components/ui/layout'
import { fetcher } from '@/hooks'
import { PreferencesPropierties } from '@/utils/interfaces'
import { Suspense, useMemo } from 'react'
import { UiTitle } from '@/components/ui/title'

export default function ContactView() {
  const { data } = useSWR<PreferencesPropierties[]>('api/preferences', fetcher)
  const memoizedPreference = useMemo(() => data, [data])

  return (
    <Suspense>
      <UiLayout addClassName='p-10'>

        <UiTitle
          title='Envía un Mensaje a F8'
          description='¿Tienes preguntas o necesitas asistencia? Contáctanos a través de formulario, WhatsApp ó correo electrónico para obtener soporte rápido.'
        />
        <section className='p-10 rounded flex flex-col gap-8 bg-gray-800 shadow-xl w-full md:w-3/4'>
          <ContactForm />

          <hr className='border-slate-100' />

          {memoizedPreference && <ContactCard data={memoizedPreference} />}
        </section>
      </UiLayout>
    </Suspense>
  )
}
