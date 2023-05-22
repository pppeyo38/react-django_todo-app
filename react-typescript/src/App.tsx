import { BrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { Layout } from './components/Layout'
import './styles/App.scss'

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
