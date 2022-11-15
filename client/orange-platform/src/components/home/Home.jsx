import React from 'react'
import './style.css'
import Navbar from '../navbar/Navbar'
import Trilhas from '../trilhasCard/TrilhasCard'
import Login from '../loginPage/Login'

const Home = () => {

		return (
		<div className="home">
			<Navbar />

			<Trilhas />
			{/* <Subtopicos /> */}

		</div>
	  )

}

export default Home
