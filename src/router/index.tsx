import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router
