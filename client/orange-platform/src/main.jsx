import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import Login from './modules/loginPage/Login'
import SignupPage from './modules/signupPage/SignupPage'

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,

// } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    <SignupPage />
  </React.StrictMode>
)
