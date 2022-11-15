import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Ux from "../components/topico-trilhas/ux/Ux";
import Qa from "../components/topico-trilhas/qa/Qa";
import Home from "../pages/home/Home";
import Login from "../pages/loginPage/Login";
import SignupPage from "../pages/signupPage/SignupPage";
import Fullstack from "../components/topico-trilhas/fullstack/Fullstack";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/Home" element={<Home />} on/>
                    <Route path="/" element={<Home />} />
                    <Route path="/fullstack" element={<Fullstack area="fullstack" />}
                    />
                    <Route path="/ux" element={<Ux area="ux" />} />
                    <Route path="/qa" element={<Qa area="qa" />} />
                    <Route path="/home" element={<Home />} />
                    <Route exact path="/cadastro" element={<SignupPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element="404 ERROR" />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;
