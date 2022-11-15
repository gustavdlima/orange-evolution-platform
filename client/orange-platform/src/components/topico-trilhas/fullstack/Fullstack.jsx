import React from "react";
import Subtopic from "../../subtopicos/Subtopic";
import FullstackJson from "../../subtopicos/fullstack-subtopics.json";
import Navbar from "../../navbar/Navbar";
import "./fullstack-style.scss";

const Fullstack = ({ area }) => {
    return (
        <div className="fullstack">
            <Navbar />
            <div className="subtopics">
                <Subtopic title="Inicio" data={FullstackJson.inicio} />
                <Subtopic title="Conceitos" data={FullstackJson.conceitos} />
                <Subtopic title="Opcional" data={FullstackJson.opcional} />
            </div>
        </div>
    );
};

export default Fullstack;
