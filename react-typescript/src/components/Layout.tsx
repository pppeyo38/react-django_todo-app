import { ReactNode } from 'react'
import { Header } from './Header'
import '../styles/components/layout.scss'

type Props = {
  children: ReactNode
  username: string
}

export const Layout = ({ children, username }: Props) => {
  return (
    <>
      <Header username={username}></Header>
      <main>
        <article className="article">{children}</article>
      </main>
    </>
  )
}
