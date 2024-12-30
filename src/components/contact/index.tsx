'use client'

import phoneCodes from '@/utils/phoneCountries.json'
import { FormEvent, useState } from 'react'
import { inputClassNames, InputField } from '../inputField'
import { UiButton } from '../ui/button'
import { FormContactState } from '@/utils/interfaces'
import { useValidation } from '@/hooks'

export const FormContact = () => {
  const { validateNumber } = useValidation()
  const [phoneCode, setPhoneCode] = useState<string>('+505')
  const [dataForm, setDataForm] = useState<FormContactState>({
    email: '',
    company: '',
    fullName: '',
    message: '',
    phoneNumber: '',
  })

  console.log(phoneCode)
  
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={submit} className='flex flex-col gap-4 rounded'>
      <div className='flex gap-4'>
        <label className='flex-1'>
          <span className='text-sm'>Nombre Completo *</span>
          <InputField
            className='w-full'
            inputProps={{
              name: 'fullName',
              placeholder: 'Nombre Completo',
              value: dataForm.fullName,
              onChange: ({ currentTarget }) => setDataForm({
                ...dataForm,
                fullName: currentTarget.value
              })
            }} />
        </label>

        <label className='flex-1'>
          <span className='text-sm'>Nombre Empresa</span>
          <InputField
            className='w-full'
            inputProps={{
              name: 'companyName',
              placeholder: 'Nombre Empresa',
              value: dataForm.company,
              onChange: ({ currentTarget }) => setDataForm({
                ...dataForm,
                company: currentTarget.value
              })
            }} />
        </label>
      </div>

      <div className='flex gap-4'>
        <label className='flex-1'>
          <span className='text-sm'>Correo Electrónico *</span>
          <InputField
            className='w-full'
            inputProps={{
              name: 'email',
              placeholder: 'Correo Electrónico',
              value: dataForm.email,
              onChange: ({ currentTarget }) => setDataForm({
                ...dataForm,
                email: currentTarget.value
              })
            }} />
        </label>

        <label className='flex-1'>
          <span className='text-sm'>Número telefónico *</span>
          <div className='flex gap-2'>
            <select
              onChange={({ currentTarget }) => setPhoneCode(currentTarget.value)}
              value={phoneCode}
              className={`${inputClassNames}`}>
              {phoneCodes.map(phoneCodeItem => (
                <option value={phoneCodeItem.dial_code} key={crypto.randomUUID()}>
                  {phoneCodeItem.emoji} ({phoneCodeItem.dial_code})
                </option>
              ))}
            </select>

            <InputField
              className='flex-1 disabled:bg-color-gray-100'
              inputProps={{
                name: 'phone',
                placeholder: 'Número Telefónico',
                type: 'tel',
                value: dataForm.phoneNumber,
                pattern: '[0-9]{10}',
                title: 'Número telefónico deben tener 10 dígitos',
                required: true,
                // disabled:!phoneCode,
                onChange: ({ currentTarget }) => validateNumber(currentTarget.value) && setDataForm({ ...dataForm, phoneNumber: currentTarget.value })
              }} />
          </div>
        </label>

      </div>

      <label>
        <span className='text-sm'>Mensaje *</span>
        <textarea
          rows={6}
          placeholder='Escriba un Mensaje, indique su cotizacion o duda'
          className={`w-full ${inputClassNames}`} />
      </label>

      <UiButton type='primary'>Enviar Mensaje</UiButton>
    </form>
  )
}