import { Button } from '../components/Button'
import { InputField } from '../components/InputField'

export const Login = () => {
  return (
    <>
      <h2>ログインページ</h2>
      <form>
        <InputField type="mail" />
        <Button variant="primary">ログイン</Button>
      </form>
      <Button variant="secondary">新規登録</Button>
    </>
  )
}
