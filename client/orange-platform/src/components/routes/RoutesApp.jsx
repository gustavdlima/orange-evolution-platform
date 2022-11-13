import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../loginPage/Login";
import SignupPage from "../trilhas/SignupPage";
import Home from "../home/Home";
import Fullstack from "../topico-trilhas/Fullstack";
import Ux from "../topico-trilhas/Ux";
import Qa from "../topico-trilhas/Qa";


const Private = ({ Item }) => {
    const signed = false;
    // signed = 0;
    return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/Home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/fullstack"
                        element={
						<Fullstack area="fullstack"/>
					}

                    />
                    <Route
                        path="/ux"
                        element={
						<Ux area="ux"/>
					}

                    />

					<Route
                        path="/qa"
                        element={
						<Qa area="qa"/>
					}

                    />

                    <Route path="/home" element={<Home />} />
                    <Route exact path="/cadastro" element={<SignupPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;
