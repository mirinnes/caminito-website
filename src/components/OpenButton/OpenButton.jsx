import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./openButton.scss";
export default function OpenButton({
	showProyects,
	ind,
	closeProyects,
	setRenderize,
	renderize,
	porfolioId,
	displayProyectsById,
}) {
	return (
		<i
			className={`open-icon ${showProyects ? "expanded" : ""}`}
			key={`button-${ind}`}
			onClick={() => {
				showProyects ? closeProyects() : displayProyectsById(porfolioId);
				setRenderize(!renderize);
			}}
		>
			<IoIosArrowForward
				className={`open-icon-img ${showProyects ? "expanded" : ""}`}
			/>
		</i>
	);
}
