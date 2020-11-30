import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import BackButton from "../components/BackButton/BackButton";
import {
	PROY_AUTORAL,
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
	PROY_AUTORAL,
	PROY_CANETA,
	PROY_SARAVA,
	PROY_GRAFISMOS,
	PROY_CIANOTIPIA,
	PROY_IMERSAO,
	PROY_SARAVA20,
	PROY_MINICUADERNOS,
	PROY_PUNTOINQUIETO,
];

export const Proyect = ({ match }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const proyect = PROYECTS.find((item) => {
		return item.id === Number(match.params.id);
	});
	const { images, title, subTitle, description } = proyect;

	return (
		<div>
			<section
				style={{
					backgroundImage: `url(${images[0]})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center 0",
					position: "relative",
				}}
			>
				<Link
					to={`/`}
					style={{ position: "absolute", left: "10px", top: "10px" }}
				>
					<BackButton />
				</Link>
				<div className='proyect-ventana'></div>
				<article className='proyect-container'>
					<h1 className='proyect-title'>{title}</h1>
					<h3 className='proyect-subtitle'>{subTitle}</h3>
					<p>{description}</p>
					<div
						style={{
							display: "grid",
							justifyContent: "center",
							paddingBottom: "10px",
							paddingTop: "25px",
						}}
					>
						{images.map((img, inx) => {
							return (
								<img
									style={{
										maxWidth: "85vw",
										justifySelf: "center",
										marginBottom: "15px",
									}}
									key={inx}
									src={img}
									alt='img'
								/>
							);
						})}
					</div>
				</article>
			</section>
			<Footer inProyect='inProyect' />
		</div>
	);
};
