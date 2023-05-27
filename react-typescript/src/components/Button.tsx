import { ReactNode } from 'react'
import '../styles/components/button.scss'

type Props = {
  variant: string // primary | secondary | danger
  children: ReactNode
}

export const Button = ({ variant, children }: Props) => {
  return (
    <button type="button" className={`button-${variant}`}>
      <span className="button-text">{children}</span>
    </button>
  )
}
