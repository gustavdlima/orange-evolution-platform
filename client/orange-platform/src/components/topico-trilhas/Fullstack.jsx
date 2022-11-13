import React from 'react'
import Subtopic from '../subtopicos/Subtopic'
import FullstackJson from "../subtopicos/fullstack-subtopics.json"
import Navbar from '../navbar/Navbar'


const Fullstack = ({ area }) => {

  return (
	<div className='fullstackContainer'>
        <Navbar />
		<Subtopic title="Inicio" data={FullstackJson.inicio}/>
		<Subtopic title="Conceitos" data={FullstackJson.conceitos}/>
		<Subtopic title="Opcional" data={FullstackJson.opcional}/>
	</div>
  )
}

export default Fullstack
