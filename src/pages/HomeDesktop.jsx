import React from "react";
import { Slider } from "../components/Slider/Slider";
import FooterDesktop from "../layout/Footer/FooterDesktop";

export function HomeDesktop() {
	const desktopContainer = {
		width: "70vw",
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		marginBottom: "64px",
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				margin: "83px 80px 0px 0px",
				justifyContent: "center",
			}}
		>
			<section style={desktopContainer}>
				<Slider />
			</section>
			<FooterDesktop />
		</div>
	);
}
