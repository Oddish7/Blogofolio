import './App.css'
import { Header } from './components/Header/Headert'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

function App() {
  const baseStyle = 'base_style'

  return (
    <div>
    <Header/>

    <div style={{minHeight: 'calc(100vh - 164px)'}} >
      <Main/>
    </div>

    <Footer/>
    </div>
  )
}

export default App
