import React, { useState, useEffect } from 'react'

import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import MainHeader from '../widgets/MainHeader/MainHeader'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storeLogged = localStorage.getItem('isLoggedIn')

    if (storeLogged === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways\
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
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
