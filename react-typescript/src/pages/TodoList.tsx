import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'

export const TodoList = () => {
  const { username } = useParams<{ username: string }>()

  return (
    <>
      <Header />
      <h1>{username}のTODOリスト</h1>
    </>
  )
}
