import React, { useContext } from 'react'

import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import MainHeader from '../widgets/MainHeader/MainHeader'
import AuthContext from '../entities/Auth/auth-context'

function App() {

  const ctx = useContext(AuthContext)

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  )
}

export default App
