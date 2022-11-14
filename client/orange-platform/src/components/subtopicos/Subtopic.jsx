import React, { useState } from "react";
import YoutubeEmbed from "../modal/YoutubeEmbed";
import Modal from "react-modal"
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "./style.scss";
// Modal.setAppElement(document.getElementById('root'));

const Subtopic = ({ title, data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	function openModal() {
		console.log("open")
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
	}

	const takeVideoId = (src) => {
		return "10_raCSnrqc";
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
							const videoId = takeVideoId(d.src);
							return (
								<li
									className="item"
									key={i}
									onClick={() => {
										if (
											d.src.slice(0, 23) !=
											"https://www.youtube.com" &&
											d.src.slice(0, 16) !=
											"https://youtu.be"
										)
											location.href = d.src;
									}}
								>
									<a onClick={openModal}>
										{d.description}
									</a>
									{d.src.slice(0, 23) ==
										"https://www.youtube.com" && (
											<Modal
											isOpen={modalIsOpen}
											onRequestClose={closeModal}
											contentLabel="Example Modal"
											>
											<YoutubeEmbed embedId={videoId} />
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
