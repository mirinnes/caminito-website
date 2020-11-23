import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer/Footer";
import BackButton from "../components/BackButton/BackButton";
import {
	PROY_SIAMES,
	PROY_PERSA,
	PROY_ANGORA,
	PROY_RAGDOLL,
	PROY_SIBERIANO,
} from "../assets/images/dataImages";
import "../layout/Proyect/Proyect.scss";

const PROYECTS = [
	PROY_SIAMES,
	PROY_PERSA,
	PROY_ANGORA,
	PROY_RAGDOLL,
	PROY_SIBERIANO,
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
					backgroundSize: "auto 45%",
					backgroundPosition: "center",
					backgroundPositionY: "top",
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
					<h1>Gato {title}</h1>
					<h3>{subTitle}</h3>
					<p>{description}</p>
					<div style={{ display: "grid", justifyContent: "center" }}>
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
			</section>
			<Footer />
		</div>
	);
};
