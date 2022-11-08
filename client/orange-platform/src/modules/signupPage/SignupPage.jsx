import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const SignupPage = () => {
  return (




	<div id="signup">
		<form className="form">
				<img src="./src/assets/logo-branca.png" alt=""/>
			<div className="field">
				<label htmlFor="name">Nome*</label>
				<input type="name" name="name" id="name" placeholder='Fabio Camara'/>
			</div>
			<div className="field">
				<label htmlFor="email">Email*</label>
				<input type="email" name="email" id="email" placeholder='fcamara@mail.com'/>
			</div>
			<div className="field">
				<label htmlFor="password">Senha*</label>
				<input type="password" name="password" id="password" placeholder="********"/>
			</div>
			<div className="actions">
				<button type="submit" class="button">Voltar</button>
				<button type="submit" class="button">Cadastrar</button>
			</div>
		</form>

			<Carousel id="carousel">
				<Carousel.Item className="item" interval={1500}>
					<img src="./src/assets/image-carousel.png" alt=""/>
				</Carousel.Item>
				<Carousel.Item className="item" interval={1500}>
					<img src="./src/assets/image-carousel.png" alt=""/>
				</Carousel.Item>
				<Carousel.Item className="item" interval={1500}>
					<img src="./src/assets/image-carousel.png" alt=""/>
				</Carousel.Item>
			</Carousel>

	</div>
  )
}

export default SignupPage
