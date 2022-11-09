import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

import Login from './modules/loginPage/Login'
import SignupPage from './modules/signupPage/SignupPage'
import Platform from './modules/platform/Platform'

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignupPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/platform",
    element: <Platform />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
