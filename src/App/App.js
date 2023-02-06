import React, { useState } from 'react'

import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import MainHeader from '../widgets/MainHeader/MainHeader'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  )
}

export default App
