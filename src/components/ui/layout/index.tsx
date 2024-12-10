import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const UiLayout = ({ children }: Props) => {
  return (
    <div className='justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      {children}
    </div>
  )
}