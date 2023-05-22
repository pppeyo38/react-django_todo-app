import { useParams } from 'react-router-dom'

export const TodoDetail = () => {
  const { username, id } = useParams<{ username: string; id: string }>()

  return (
    <>
      <h1>
        {username} todo{id}詳細ページ
      </h1>
    </>
  )
}
