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
      className={`outline-none p-3 bg-white text-gray-900 transition rounded-lg border ${clsx({
        'shadow-md': isFocus,
        'border-gray-400': isFocus,
      })} ${props.className || ''}`}
    />
  )
}