import React from 'react'
import './style.css'
import Navbar from '../navbar/Navbar'
import Trilhas from '../trilhas/Trilhas'
import Subtopicos from '../subtopicos/Subtopic'
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
