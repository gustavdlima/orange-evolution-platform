import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import	Axios from "axios"

import './style.css'

const Navbar = () => {

	// const navigate = useNavigate();
    // const routeChange = (path) => {
    //     navigate(path);
    // }

  return (
  <nav className='nav'>
				<img className='site-logo' src='./src/assets/logo-branca.png' alt="" href='/' />
				<div className='list-container'>
					<ul className='list'>
						<li><a href=''>Home</a></li>
						<li><a href=''>Trilhas</a></li>
						<li><a href=''>Conteúdo</a></li>
					</ul>
				</div>
                <div className="actions">
                    <button type="submit" className="button">
                        Login
                    </button>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </div>
	</nav>

)}

export default Navbar
