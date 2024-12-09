import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const UiLayout = ({ children }: Props) => {
  return (
    <div className='grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start w-full'>
        {children}
      </main>
    </div>
  )
}