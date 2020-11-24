import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import {
	PROY_CANETA,
	PROY_SARAVA,
	PROY_GRAFISMOS,
	PROY_CIANOTIPIA,
	PROY_IMERSAO,
	PROY_SARAVA20,
	PROY_MINICUADERNOS,
	PROY_PUNTOINQUIETO,
} from "../assets/images/dataImages";
import "../layout/Proyect/Proyect.scss";

const PROYECTS = [
	PROY_CANETA,
	PROY_SARAVA,
	PROY_GRAFISMOS,
	PROY_CIANOTIPIA,
	PROY_IMERSAO,
	PROY_SARAVA20,
	PROY_MINICUADERNOS,
	PROY_PUNTOINQUIETO,
];

export const ProyectDesktop = ({ match }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const proyect = PROYECTS.find((item) => {
		return item.id === Number(match.params.id);
	});
	const { images, title, subTitle, description } = proyect;
	console.log("Estas son las images", images);
	const styleContainer = {
		backgroundImage: `url(${images[0]})`,
		backgrondSize: "contain",
		backgroundRepeat: "no-repeat",
		height: "100vh",
		backgroundSize: "cover",
		borderRadius: "15px",
		display: "flex",
		alignItems: "flex-end",
		position: "relative",
	};
	const styleContent = {
		backgroundColor: "black",
		color: "white",
		borderRadius: "15px",
		padding: "20px 40px",
	};
	return (
		<div style={styleContainer}>
			<Link
				to={`/`}
				style={{ position: "absolute", left: "25px", top: "25px" }}
			>
				<BackButton />
			</Link>
			<article style={styleContent}>
				<h1>{title}</h1>
				<h3>{subTitle}</h3>
				<p>{description}</p>
				<div>
					{images.map((img, inx) => {
						return (
							<img
								style={{ maxWidth: "50vw", justifySelf: "center" }}
								key={inx}
								src={img}
								alt='img'
							/>
						);
					})}
				</div>
			</article>
		</div>
	);
};
