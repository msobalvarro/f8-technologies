'use client'

import { FormEvent } from 'react'
import { InputField } from '../inputField'

export const FormContact = () => {
  const submit = (event: FormEvent<HTMLFormElement>) => {

  }

  return (
    <form onSubmit={submit} className='flex flex-col gap-4'>
      <InputField inputProps={{ name: 'fullName' }} />

      <div className='flex gap-4'>
        <InputField inputProps={{ name: 'email' }} />
        <InputField inputProps={{ name: 'phone' }} />
      </div>

      <textarea className='outline-none p-3 bg-white text-gray-900 transition rounded-lg border'></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}