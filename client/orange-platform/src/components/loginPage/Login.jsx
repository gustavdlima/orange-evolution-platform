import React from 'react'
import { useState } from "react"
import "./style.css"
import	Axios from "axios"

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (values) => {
		values.preventDefault();
		Axios.post("http://localhost:3000/login", {
			email: email,
			password: password,
		}).then((response) => {
			console.log(response);
		});
	};

  return (
	<div id="login">
		<form className="form" onSubmit={handleSubmit}>
			<img src="./src/assets/logo-branca.png" alt="" />
			{/* <h1 className="title">Login</h1> */}
			<div className="field">
				<label htmlFor="email">Email</label>
				<input
				type="email"
				name="email"
				id="email"
				placeholder="Ex: fcamara@mail.com"
				value={email}
				onChange={(value) => setEmail(value.target.value)}
				/>
			</div>
			<div className="field">
				<label htmlFor="password">Senha</label>
				<input
				type="password"
				name="password"
				id="password"
				placeholder="Ex: **********"
				value={password}
				onChange={(value) => setPassword(value.target.value)}
				/>
			</div>
			<div className="actions">
				<button type="submit">Entrar</button>
			</div>
		</form>
	</div>
  )
}

export default Login