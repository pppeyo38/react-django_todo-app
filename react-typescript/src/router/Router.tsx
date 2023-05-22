import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { TodoList } from '../pages/TodoList'
import { TodoDetail } from '../pages/TodoDetail'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<TodoList />} />
      <Route path="/:username/:id" element={<TodoDetail />} />
    </Routes>
  )
}
