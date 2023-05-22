import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TodoListType } from '../types/TodoList'
import '../styles/pages/todolist.scss'

export const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoListType>([])
  const [username, setUsername] = useState<string>('')

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
    setUsername('ユーザーA')
  }, [])

  return (
    <>
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
    </>
  )
}
