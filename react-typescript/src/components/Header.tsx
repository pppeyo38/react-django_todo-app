import { Link } from 'react-router-dom'
import '../styles/components/header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to={'/'}>
          <h1 className="header-heading">TODO's</h1>
        </Link>
      </div>
    </header>
  )
}
