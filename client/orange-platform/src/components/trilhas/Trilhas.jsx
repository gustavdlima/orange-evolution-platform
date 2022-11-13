import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom"

const Trilhas = () => {
	const navigate = useNavigate();
	// const

	return (

		<div className="trails">
			<div className="row">
				<ul>
					<div className='col'>
						<li>
							<a href='/fullstack'>Fullstack Dev</a>
						</li>
					</div>
					<div className='col'>
						<li>
							<a href='/ux'><p>UX/UI Designer</p></a>
						</li>
					</div>
					<div className='col'>
						<li>
							<a href='/qa' >Quality Assurance (QA)</a>
						</li>
					</div>
				</ul>
			</div>
		</div>
	)
}

export default Trilhas
