'use client'

import { FormEvent } from 'react'
import { InputField } from '../inputField'

export const FormContact = () => {
  const submit = (event: FormEvent<HTMLFormElement>) => {

  }

  return (
    <form onSubmit={submit} className='flex flex-col gap-4'>
      <InputField inputProps={{ name: 'fullName', placeholder: 'Nombre Completo' }} />

      <div className='flex gap-4'>
        <InputField inputProps={{ name: 'email', placeholder: 'Correo Electrónico' }} />
        <InputField inputProps={{ name: 'phone', placeholder: 'Número Telefónico' }} />
      </div>

      <textarea placeholder='Mensaje' className='outline-none p-3 bg-white text-gray-900 transition rounded-lg border'></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}