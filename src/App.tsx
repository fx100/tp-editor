import { Link } from 'react-router-dom'
import Router from './router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <nav>
        <Link to="/">首页</Link> | <Link to="/about">关于</Link>
      </nav>
      <Router />
    </ConfigProvider>
  )
}

export default App
