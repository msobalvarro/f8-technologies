'use client'

import phoneCodes from '@/utils/phoneCountries.json'
import { FormEvent, useState } from 'react'
import { inputClassNames, InputField } from '../inputField'
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
    <form onSubmit={submit} className='flex flex-col gap-4 rounded'>
      <label>
        <span className='text-sm'>Nombre Completo</span>
        <InputField
          className='w-full'
          inputProps={{
            name: 'fullName',
            placeholder: 'Nombre Completo'
          }} />
      </label>

      <div className='flex gap-4'>
        <label className='flex-1'>
          <span className='text-sm'>Correo Electrónico</span>
          <InputField
            className='w-full'
            inputProps={{
              name: 'email',
              placeholder: 'Correo Electrónico'
            }} />
        </label>

        <label className='flex-1'>
          <span className='text-sm'>Número telefónico</span>
          <div className='flex gap-2'>
            <select className={`${inputClassNames}`}>
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
        </label>

      </div>

      <label>
        <span className='text-sm'>Mensaje</span>
        <textarea
          rows={6}
          placeholder='Escriba un Mensaje, indique su cotizacion o duda'
          className={`w-full ${inputClassNames}`} />
      </label>

      <UiButton type='primary'>Enviar Mensaje</UiButton>
    </form>
  )
}