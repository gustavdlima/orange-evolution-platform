import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom"



const Trilhas = () => {
	const navigate = useNavigate();

	const handleClick = event => {
		console.log(event.target);

		console.log('image clicked');
	};

	return (

		<div className="trails">
			<div className="row">
				<ul>
					<div className='col'>
						<li>
							<a>Fullstack Dev</a>
						</li>
					</div>
					<div className='col'>
						<li>
							<a><p>UX/UI Designer</p></a>
						</li>
					</div>
					<div className='col'>
						<li>
							<a>Quality Assurance (QA)</a>
						</li>
					</div>
				</ul>
			</div>
		</div>
	)
}

export default Trilhas
