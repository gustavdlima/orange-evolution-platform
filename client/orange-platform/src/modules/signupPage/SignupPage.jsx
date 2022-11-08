import React from 'react'

const SignupPage = () => {
  return (
	<div id="signup">
		<h1>Cadastro</h1>
		<form className="form">
			<div className="field">
				<label htmlFor="name">Nome:</label>
				<input type="name" name="name" id="name" />
				<label htmlFor="last_name">Último nome</label>
				<input type="last_name" name="last_name" id="last_name" />
			</div>
			<div className="field">
				<label htmlFor="email">Email:</label>
				<input type="email" name="email" id="email" />
			</div>
			<div className="field">
				<label htmlFor="password">Senha:</label>
				<input type="password" name="password" id="password" />
			</div>
		</form>
	</div>
  )
}

export default SignupPage
