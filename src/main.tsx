import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Bootstrap from './bootstrap.tsx'
import App from './App.tsx'
import LoginPageFront from './Login-Page/LoginPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Bootstrap /> */}
    <App />

  </React.StrictMode>,
)
