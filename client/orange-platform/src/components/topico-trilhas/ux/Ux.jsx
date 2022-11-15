import React from "react";
import Subtopic from "../../subtopicos/Subtopic";
import UxJson from "../../subtopicos/ux-subtopics.json";
import Navbar from "../../navbar/Navbar";
import './ux-style.scss'

const Ux = ({ area }) => {
    return (
        <div className="uxContainer">
            <Navbar />
            <div className="subtopics">
                <Subtopic title="Inicio" data={UxJson.inicio} />
                <Subtopic title="Fundamentos Ux" data={UxJson.fundamentosUx} />
                <Subtopic title="Fundamentos Ui" data={UxJson.fundamentosUi} />
                <Subtopic title="Opcional" data={UxJson.opcional} />
            </div>
        </div>
    );
};

export default Ux;
