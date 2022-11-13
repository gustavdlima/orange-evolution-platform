import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'

const Subtopic = ({ title, data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	    return (
        <>
		<div className="Box">
			<h3 onClick={() => setIsOpen((v) => !v)}>{title}</h3>
        </div>
		<div className="subitems">
		{isOpen ? (
			<ul>
				{data.map((d, i) => {
					return (
						<li className="item" key={i} onClick={() => {
							navigate(`${d.src}`)
						}}>{d.description}</li>
					)
				})}
			</ul>
			): null}
		</div>

		</>
    );
};

export default Subtopic;
