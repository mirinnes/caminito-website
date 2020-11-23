import React from "react";
import "./FooterDesktop.scss";
export default function FooterDesktop() {
	return (
		<footer className='footer-desktop-container'>
			<i>Instagram</i>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "70.3%",
					marginRight: "94px",
				}}
			>
				<h3 style={{ margin: "10px", fontWeight: 400 }}>
					Artes gráficas - Diseño y fotografía por Camila Dallaglio
				</h3>
				<h3 style={{ margin: "10px", fontWeight: 400 }}>
					caminitoediciones@gmail.com
				</h3>
			</div>
		</footer>
	);
}
