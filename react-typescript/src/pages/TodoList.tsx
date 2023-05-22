import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { TodoListType } from '../types/TodoList'
import '../styles/pages/todolist.scss'

export const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoListType>([])
  const { username } = useParams<{ username: string }>()

  useEffect(() => {
    setTodoList(([]) => [
      {
        id: 1,
        content: 'todoテスト',
        user: 1,
      },
      {
        id: 2,
        content: 'todoコンテンツ',
        user: 1,
      },
      {
        id: 3,
        content: 'todoテスト',
        user: 1,
      },
      {
        id: 4,
        content: 'todoコンテンツ',
        user: 1,
      },
    ])
  }, [])

  return (
    <>
      <Header username={username!} />
      <main>
        <section className="todolist">
          <h2>{username}のTODOリスト</h2>
          {todoList.length && (
            <ul className="todolist-block">
              <li>
                <Link
                  to={`/${username}/${todoList[0].id}`}
                  className="todolist-item"
                >
                  {todoList[0].content}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${username}/${todoList[1].id}`}
                  className="todolist-item"
                >
                  {todoList[1].content}
                </Link>
              </li>
            </ul>
          )}
        </section>
      </main>
    </>
  )
}
