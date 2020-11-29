import React from "react";
import { Slider } from "../components/Slider/Slider";
import { SLIDER_PROYECTS } from "../assets/images/dataImages";
import FooterDesktop from "../layout/Footer/FooterDesktop";

export function HomeDesktop() {
	const desktopContainer = {
		width: "70vw",
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		marginBottom: "60px",
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100vh",
				margin: "83px 80px 0px 0px",
				justifyContent: "center",
			}}
		>
			<section style={desktopContainer}>
				<Slider img={SLIDER_PROYECTS[0].img} />
				<h3 style={{ margin: "10px", fontWeight: 400 }}>
					{SLIDER_PROYECTS[0].portfolio}:{" "}
					<span style={{ color: "#8A5E3C" }}>{SLIDER_PROYECTS[0].title}</span>
				</h3>
			</section>
			<FooterDesktop />
		</div>
	);
}
