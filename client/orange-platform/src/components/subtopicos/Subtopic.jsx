import React, { useState } from "react";
import YoutubeEmbed from "../modal/YoutubeEmbed";
import Modal from "react-modal"
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "./style.scss";
Modal.setAppElement(document.getElementById('root'));
var id = toString('');

const Subtopic = ({ title, data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	function openModal() {
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	function saveId(temp) {
		id = temp;
	}

	const takeVideoId = (src) => {
		if (src.slice(0, 23) == "https://www.youtube.com") {
			const linkSplits = src.split('=')
			const id = linkSplits[1].substr(0, 11)
			return id;
		} else{
			const linkSplits = src.split('/')
			const id = linkSplits[3];
			return id;
		}
	};

	return (
		<>
			<div className="Box">
				<h3
					onClick={() =>
						setIsOpen((v) => !v) && setVideoIsOpen((v) => !v)
					}
				>
					{title}
				</h3>
			</div>
			<div className="subitems">
				{isOpen ? (
					<ul>
						{data.map((d, i) => {
							return (
								<li
									className="item"
									key={i}
									onClick={() => {
										const temp = takeVideoId(d.src.toString());
										saveId(temp);
										if (
											(d.src.slice(0, 23) !=
											"https://www.youtube.com") &&
											(d.src.slice(0, 16) !=
											"https://youtu.be")
										)
											location.href = d.src;
									}}
								>
									<a onClick={openModal}>
										{d.description}
									</a>
									{((d.src.slice(0, 23) ==
										"https://www.youtube.com")
										|| (d.src.slice(0, 16) ==
											"https://youtu.be")) && (
											<Modal
												isOpen={modalIsOpen}
												onRequestClose={closeModal}
												contentLabel="Youtube Modal"
											>
												<YoutubeEmbed embedId={id} />
											</Modal>
										)}
								</li>
							);
						})}
					</ul>
				) : null}
			</div>
		</>
	);
};

export default Subtopic;
