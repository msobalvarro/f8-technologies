'use client'

import { FormEvent, useState } from 'react'
import { InputField } from '../inputField'
import phoneCodes from '@/utils/phoneCountries.json'
import { UiButton } from '../ui/button'
import { FormContactState } from '@/utils/interfaces'
import { useValidation } from '@/hooks'

export const FormContact = () => {
  const { validateNumber } = useValidation()
  const [phoneCode, setPhoneCode] = useState<null | string>(null)
  const [dataForm, setDataForm] = useState<FormContactState>({
    email: '',
    fullName: '',
    message: '',
    phoneNumber: '',
  })


  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={submit} className='flex flex-col gap-4'>
      <InputField inputProps={{ name: 'fullName', placeholder: 'Nombre Completo' }} />

      <div className='flex gap-4'>
        <InputField
          className='flex-1'
          inputProps={{
            name: 'email',
            placeholder: 'Correo Electrónico'
          }} />


        <div className='flex gap-1'>
          <select className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            {phoneCodes.map(phoneCodeItem => (
              <option value={phoneCodeItem.code} key={crypto.randomUUID()}>
                {phoneCodeItem.emoji} ({phoneCodeItem.dial_code})
              </option>
            ))}
          </select>

          <InputField
            className='flex-1'
            inputProps={{
              name: 'phone',
              placeholder: 'Número Telefónico',
              type: 'tel',
              onChange: ({ currentTarget }) => validateNumber(currentTarget.value) && setDataForm({ ...dataForm, phoneNumber: currentTarget.value })
            }} />
        </div>
      </div>

      <textarea placeholder='Mensaje' className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>

      <UiButton type='primary'>Enviar Mensaje</UiButton>
    </form>
  )
}