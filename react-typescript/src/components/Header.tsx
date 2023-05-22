import { Link } from 'react-router-dom'
import '../styles/components/header.scss'

type Props = {
  username: string
}

export const Header = ({ username }: Props) => {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to={`/${username}`}>
          <h1 className="header-heading">TODO's</h1>
        </Link>
      </div>
    </header>
  )
}
