import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type: 'primary' | 'secondary'
  className?: string
}

export const UiButton = ({ children, type, className }: Props) => {
  return <button className={`
    ${clsx({
    'rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-gray-100 dark:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5': type === 'primary',
    'rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44': type === 'secondary'
  })}
    ${className}
  `}>{children}</button>
}
