import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layouts/Layouts'
import { Main } from './components/Main/Main'
import { OpenPostPage } from './pages/OpenPostPage/OpenPostPage'
import { EditPostPage } from './pages/EditPostPage/EditPostPage'
import { SignUpPage } from './pages/SignUpPage/SignUpPage'
import { RegistrationConfirmationPage } from './pages/RegistrationConfirmationPage/RegistrationConfirmationPage'
import { ActivationPage } from './pages/ActivationPage/ActivationPage'
import { SuccessPage } from './pages/SuccessPage/SuccessPage'
import { SignInPage } from './pages/SignInPage/SIgnInPage'
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage'
import { SearchResultsPage } from './pages/SearchResultsPage/SearchResultsPage'
import { AddPostPage } from './pages/AddPostPage/AddPostPage'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='openpost/:id' element={<OpenPostPage/>}/>
        <Route path='editpost' element={<EditPostPage/>}/>

        <Route path='auth'>
          <Route index element={<SignUpPage/>}/>
          <Route path='registrationconfirm' element={<RegistrationConfirmationPage/>}/>
          <Route path='activate' element={<ActivationPage/>}/>
          <Route path='success' element={<SuccessPage/>}/>
          <Route path='signin'>
            <Route index element={<SignInPage/>}/>
            <Route path='forgotpassword' element={<ResetPasswordPage/>}/>
          </Route>
        </Route>
        
        <Route path='search'>
            <Route index element={<SearchResultsPage/>}/>
            <Route path='openpost/:id' element={<OpenPostPage/>}/>
        </Route>
        <Route path='addpost' element={<AddPostPage/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App
