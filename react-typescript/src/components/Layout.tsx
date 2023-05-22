import { ReactNode } from 'react'
import { Header } from './Header'
import '../styles/components/layout.scss'

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        <article className="article">{children}</article>
      </main>
    </>
  )
}
