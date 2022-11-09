import React from "react";
import { useState } from "react"
import "./style.css";
import	Axios from "axios"

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (values) => {
        values.preventDefault();
        Axios.post("http://localhost:3000/cadastro", {
            name: name,
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
        });
        console.log(name, email, password);
    };

    return (
        <div id="signup">
            <form className="form" onSubmit={handleSubmit}>
                <img src="./src/assets/logo-branca.png" alt="" />
                <div className="field">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Ex: Fabio Camara"
                        value={name}
                        onChange={(value) => setName(value.target.value)}
                    />
                </div>
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
                    <button type="submit" className="button">
                        Login
                    </button>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </div>
            </form>
            <img
                className="form-side-img"
                src="./src/assets/151516.png"
                alt=""
            />
        </div>
    );
};

export default SignupPage;
