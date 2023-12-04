import './App.css'
import { useState } from 'react'
import { Header } from './components/Header/Headert'
import { Main } from './components/Main/Main'
import { SingIn } from './components/Other/SignIn/SignIn'
import { ThemeButtons } from './components/test/ThemeButtons/ThemeButtons'
import { SignUp } from './components/Other/SignUp/SignUp'

function App() {
  const [theme, setTheme] = useState<string>('light')

  const changeTheme = (theme: string) => {
      setTheme(theme)
  }

  return (
    <div className={theme}>
    <Header/>
    <Main/>
    <SingIn/>
    <SignUp/>
    <ThemeButtons theme={theme} changeTheme={changeTheme}/>
    </div>
  )
}

export default App
