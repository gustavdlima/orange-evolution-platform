import { Fragment } from 'react'
import {
	BrowserRouter,
	Route,
	Routes,
  } from "react-router-dom"

import Login from '../loginPage/Login'
import SignupPage from '../signupPage/SignupPage'
import Home from '../home/Home'
const Private = ({ Item }) => {
	const signed = false;
	// signed = 0;
	return signed > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
  return (
	<BrowserRouter>
		<Fragment>
			<Routes>
				<Route exact path="/Home"
				 element={<Home />} />
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route exact path="/cadastro" element={<SignupPage />}/>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Home/>} />
			</Routes>
		</Fragment>
	</BrowserRouter>
  )
}

export default RoutesApp
