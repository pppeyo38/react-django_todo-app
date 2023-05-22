import { useParams } from 'react-router-dom'

export const TodoList = () => {
  const { username } = useParams<{ username: string }>()

  return (
    <>
      <h1>{username}のTODOリスト</h1>
    </>
  )
}
