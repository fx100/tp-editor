import React from 'react'
import { Link } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <>
      <Link to="/">首页</Link> | <Link to="/about">关于</Link>
      <Router />
    </>
  )
}

export default App
