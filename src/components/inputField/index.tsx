'use client'

import clsx from 'clsx'
import { useState, InputHTMLAttributes } from 'react'

interface Props {
  onEnter?: () => void
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  className?: string
}


export const InputField = (props: Props) => {
  const [isFocus, setFocus] = useState<boolean>(false)
  return (
    <input
      {...props.inputProps}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onKeyDown={event => {
        if (event.key === 'Enter') {
          props?.onEnter?.()
        }
      }}
      className={`outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${clsx({
        'shadow-md': isFocus,
        'border-gray-400': isFocus,
      })} ${props.className || ''}`}
    />
  )
}