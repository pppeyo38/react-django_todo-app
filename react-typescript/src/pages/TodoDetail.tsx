import { useState, useEffect } from 'react'
import '../styles/pages/tododetail.scss'

export const TodoDetail = () => {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    setContent('todoの内容あいうえお。')
  }, [])

  return (
    <>
      <section>
        <form className="tododetail-form">
          <label className="tododetail-label">TODOを書きこもう</label>
          <textarea className="tododetail-textarea" rows={5}>
            {content}
          </textarea>
          <button className="tododetail-button">保存する</button>
        </form>
      </section>
    </>
  )
}
