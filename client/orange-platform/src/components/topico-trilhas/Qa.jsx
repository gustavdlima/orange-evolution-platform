import React from 'react'
import Subtopic from '../subtopicos/Subtopic'
import QaJson from "../subtopicos/qa-subtopics.json"
import Navbar from '../navbar/Navbar'


const Qa = ({ area }) => {

  return (
	<div className='qaContainer'>
        <Navbar />
		<Subtopic title="Inicio" data={QaJson.inicio}/>
		<Subtopic title="Conceitos" data={QaJson.conceitos}/>
		<Subtopic title="Opcional" data={QaJson.opcional}/>
	</div>
  )
}

export default Qa
