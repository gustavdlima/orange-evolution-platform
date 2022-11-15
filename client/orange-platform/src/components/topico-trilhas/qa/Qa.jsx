import React from "react";
import Subtopic from "../../subtopicos/Subtopic";
import QaJson from "../../subtopicos/qa-subtopics.json";
import Navbar from "../../navbar/Navbar";
import "./qa-style.scss";

const Qa = ({ area }) => {
    return (
        <div className="qaContainer">
            <Navbar />
            <div className="subtopics">
                <Subtopic title="Inicio" data={QaJson.inicio} />
                <Subtopic title="Conceitos" data={QaJson.conceitos} />
                <Subtopic title="Opcional" data={QaJson.opcional} />
            </div>
        </div>
    );
};

export default Qa;
