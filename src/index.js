import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App/App'
import { AuthContextProvider } from './entities/Auth/auth-context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
)
