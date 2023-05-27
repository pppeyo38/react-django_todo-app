import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { TodoList } from '../pages/TodoList'
import { TodoDetail } from '../pages/TodoDetail'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/:username/:id" element={<TodoDetail />} />
    </Routes>
  )
}
