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
import "../layout/Proyect/ProyectDesktop.scss";

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
	const { images, title, subTitle, description, tapa } = proyect;

	return (
		<div
			className='proyectDesktop-container'
			style={{ backgroundImage: `url(${tapa})` }}
		>
			<Link to={`/`} className='proyectDesktop-BackButtonLink'>
				<BackButton />
			</Link>
			<article className='proyectDesktop-contentContainer'>
				<h1 className='proyectDesktop-title'>{title}</h1>
				<h3 className='proyectDesktop-subtitle'>{subTitle}</h3>
				<p className='proyectDesktop-text'>{description}</p>
				<div className='proyectDesktop-imagesContainer'>
					{images.map((img, inx) => {
						return (
							<img
								className='proyectDesktop-img'
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
