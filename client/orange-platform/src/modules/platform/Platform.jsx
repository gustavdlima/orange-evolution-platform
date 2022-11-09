import React from 'react'
import "./style.css"

export default function Platform() {


  return (
	<div id="platform">
		<div className="perfil-column">
			<img href="" />
			<h1> Gustavo Martins </h1>
			<div className="game-bar">
				<ul>
					<li>Level x</li>
					<li>Trilha x</li>
					<li>Pontos x</li>
				</ul>
			</div>
		</div>

		<div className="content-trail">
			<div className="field">
				<img className="fullstack" src="./src/assets/fullstack.png" alt="" />
			</div>
			<div className="field">
				<img className="ux-ui" src="./src/assets/ux.png" alt="" />
			</div>
			<div className="field">
				<img className="quality-a" src="./src/assets/qa.png" alt=""/>
			</div>
		</div>
	</div>
  )
}
