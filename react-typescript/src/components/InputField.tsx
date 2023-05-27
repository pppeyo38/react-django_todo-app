import '../styles/components/inputField.scss'

type Props = {
  type: string
}

export const InputField = ({ type }: Props) => {
  return <input type={type} className="input-field" />
}
