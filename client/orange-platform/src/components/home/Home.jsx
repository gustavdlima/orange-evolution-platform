import React from 'react'
import './style.css'
import Navbar from '../navbar/Navbar'
import Trilhas from '../trilhas/Trilhas'

const Home = () => {
	return (
		<div className="home">
			<Navbar />

			<Trilhas />

		</div>
	  )
}

export default Home
