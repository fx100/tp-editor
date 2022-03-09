import { Link } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <>
      <nav>
        <Link to="/">首页</Link> | <Link to="/about">关于</Link>
      </nav>
      <Router />
    </>
  )
}

export default App
