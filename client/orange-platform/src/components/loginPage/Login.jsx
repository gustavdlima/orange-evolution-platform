import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
	const [user, setUser] = useState("");

    const handleSubmit = async values => {
        values.preventDefault();
        await Axios.post("http://localhost:3000/login", {
            email: email,
            password: password,
		}).then((response) => {
            setUser(email);
			localStorage.setItem('user', email)
            console.log(response);
			routeChange("/home");
        });
    };

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			setUser(loggedInUser);
		} else {
			console.log("Não existe ninguém logado.")
		}
	});

	const handleLogout = () => {
		setUser([]);
		setEmail("");
		setPassword("");
		localStorage.clear();
	};

	const navigate = useNavigate();
    const routeChange = (src) => {
        let path = src
        navigate(path);
    };

	if (user) {
		return <div>
			{user} já está logado!
			<button onClick={() =>{
				handleLogout();
				routeChange("/cadastro")
			}}>Logout</button>
			</div>;
	}
    return (
        <div id="login">
            <form className="form" onSubmit={handleSubmit}>
                <img src="./src/assets/logo-branca.png" alt="" />
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
    );
};

export default Login;
