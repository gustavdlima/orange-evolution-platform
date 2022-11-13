import React from 'react'
import Subtopic from '../subtopicos/Subtopic'
import UxJson from "../subtopicos/ux-subtopics.json"
import Navbar from '../navbar/Navbar'


const Ux = ({ area }) => {


  return (
	<div className="uxContainer">
        <Navbar />
		<Subtopic title="Inicio" data={UxJson.inicio}/>
		<Subtopic title="Fundamentos Ux" data={UxJson.fundamentosUx}/>
		<Subtopic title="Fundamentos Ui" data={UxJson.fundamentosUi}/>
		<Subtopic title="Opcional" data={UxJson.opcional}/>
	</div>
  )
}

export default Ux
