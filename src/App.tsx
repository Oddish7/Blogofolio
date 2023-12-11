import './App.css'
import { useThemeContext } from './utils/ThemeContext'
import { Header } from './components/Header/Headert'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

function App() {
  const baseStyle = 'base_style'
  const themeCtx = useThemeContext()

  return (
    <div className={`${themeCtx.state} ${baseStyle}`}>
    <Header/>

    <div style={{minHeight: 'calc(100vh - 164px)'}} >
      <Main/>
    </div>

    <Footer/>
    </div>
  )
}

export default App
