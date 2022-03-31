import React from 'react'
import {Routes, Route} from 'react-router-dom'

import{ 
  Homepage,
  Loginpage,
  Profilepage,
  ProtectedPage,
  Registerpage,
  ResetPasswordPage,
  ForgotPasswordPage
}from './pages/Homepage'

export default function AppRouter(props) {
  return (
    <>
      <Routes>
   
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/login' element={<Loginpage />} />
          <Route exact path='/register' element={<Registerpage />} />
          <Route exact path='/profile' element={<Profilepage />} />
          <Route exact path='/protected-page' element={<ProtectedPage />} />
          <Route exact path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route exact path='/reset-password' element={<ResetPasswordPage />} />
        

      
      </Routes>
    </>
  )
}
