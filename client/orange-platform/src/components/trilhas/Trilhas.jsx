import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Trilhas = () => {
    const loggedInUser = localStorage.getItem("user");

    const isUserLogged = () => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            return 1;
        } else {
            return 0;
        }
    };

    const navigate = useNavigate();
    const routeChange = (src) => {
        let path = src;
        navigate(path);
    };

    return (
        <div className="trails">
            <div className="row">
                <ul>
                    <div className="col">
                        <li>
                            <a
                                onClick={() => {
                                    if (!isUserLogged) {
                                        routeChange("/fullstack");
                                    } else {
                                        routeChange("/cadastro");
                                    }
                                }}
                            >
                                Fullstack Dev
                            </a>
                        </li>
                    </div>
                    <div className="col">
                        <li>
                            <a  onClick={() => {
                                    if (!isUserLogged) {
                                        routeChange("/ux");
                                    } else {
                                        routeChange("/cadastro");
                                    }
                                }}>
                                <p>UX/UI Designer</p>
                            </a>
                        </li>
                    </div>
                    <div className="col">
                        <li>
                            <a  onClick={() => {
                                    if (!isUserLogged) {
                                        routeChange("/qa");
                                    } else {
                                        routeChange("/cadastro");
                                    }
                                }}>Quality Assurance (QA)</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Trilhas;
