import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

import "./style.css";

const Navbar = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const isUserLogged = localStorage.getItem("user");
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser([]);
        setEmail("");
        setPassword("");
        localStorage.clear();
        routeChange("/login");
    };

    const routeChange = (src) => {
        let path = src;
        navigate(path);
    };
    if (isUserLogged) {
        return (
            <nav className="nav">
                <div className="row">

                    {!isUserLogged.indexOf("admin@mail.com") ? (
                        <div className="col-6">
                            <a href="/">
                            <img
                                className="site-logo"
                                src="./src/assets/multicolored_logo.png"
                                alt="orange juice"
                            />
                        </a>
                            <ul className="list">
                                <li>
                                    <a href="/home">Admin page</a>
                                </li>
                                <li>
                                    <a>Adicionar Curso</a>
                                </li>
                                <li>
                                    <a>Remover Curso</a>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="button"
                                onClick={() => {
                                    handleLogout();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="col-6">
                            <a href="/">
                            <img
                                className="site-logo"
                                src="./src/assets/multicolored_logo.png"
                                alt="orange juice"
                            />
                        </a>
                            <ul className="list">
                                <li>
                                    <a href="/home">Home</a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => {
                                            location.href =
                                                "https://digital.fcamara.com.br/programadeformacao";
                                        }}
                                    >
                                        Programa Formação
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => {
                                            routeChange(
                                                (location.href =
                                                    "https://digital.fcamara.com.br/programadeformacao-momentotbt")
                                            );
                                        }}
                                    >
                                        Cases Hackhaton
                                    </a>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="button"
                                onClick={() => {
                                    handleLogout();
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        );
    }

    return (
        <nav className="nav">
            <div className="row">
                <div className="col-6">
                <div className="col">
                    <a href="/">
                        <img
                            className="site-logo"
                            src="./src/assets/multicolored_logo.png"
                            alt="orange juice"
                            />
                    </a>
                    </div>
                <div className="col">
                    <ul className="list">
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    location.href =
                                        "https://digital.fcamara.com.br/programadeformacao";
                                }}
                            >
                                Programa Formação
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    routeChange(
                                        (location.href =
                                            "https://digital.fcamara.com.br/programadeformacao-momentotbt")
                                    );
                                }}
                            >
                                Cases Hackhaton
                            </a>
                        </li>
                    </ul>
                    </div>
                <div className="col">
                    <button
                        type="button"
                        className="button"
                        onClick={() => {
                            routeChange("/login");
                        }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => {
                            routeChange("/cadastro");
                        }}
                    >
                        Cadastrar
                    </button>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
