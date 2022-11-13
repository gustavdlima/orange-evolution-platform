import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

import "./style.css";

const Navbar = () => {
    // const navigate = useNavigate();
    // const routeChange = (path) => {
    //     navigate(path);
    // }

    return (
        <nav className="nav">
            <div className="row">
                <div className="col-img">
                    <a href="/">
                        <img
                            className="site-logo"
                            src="./src/assets/multicolored_logo.png"
                            alt="orange juice"
                        />
                    </a>
                </div>
                <div className="col-6">
                    <ul className="list">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/trilhas">Trilhas</a>
                        </li>
                        <li>
                            <a href="/conteudo">Conteúdo</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <button type="submit" className="button">
                        Login
                    </button>
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
