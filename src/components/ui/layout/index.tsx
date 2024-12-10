import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  addClassName?: string
}

export const UiLayout = ({ children, addClassName }: Props) => {
  return (
    <div className={`bg-[url("/background-layer.svg")] bg-bottom bg-no-repeat justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] ${addClassName}`}>
      {children}
    </div>
  )
}