import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
	PORTFOLIO_CAROS,
	PORTFOLIO_BARATOS,
	PORTFOLIO_BUENOS,
} from "../assets/images/dataImages";
import "../layout/Portfolio/PortfolioDesktop.scss";
const PORTFOLIOS = [PORTFOLIO_CAROS, PORTFOLIO_BARATOS, PORTFOLIO_BUENOS];

export function PortfolioDesktop({ match }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const portfolio = PORTFOLIOS.find((item) => {
		return item.id === Number(match.params.id);
	});
	const styleContainer = {
		padding: "20px 40px",
		backgroundColor: "black",
		borderRadius: "15px",
		display: "grid",
		width: "100vw",
		gridTemplateColumns: "33.33% 33.33% 33.34%",
		gridTemplateRows: "50%",
		height: "100vh",
	};
	return (
		<div style={styleContainer}>
			Soy el portfolio : {portfolio.title}
			Tu puedes recorrer los proyectos :
			{portfolio.proyects.map((proyect, ind) => {
				return (
					<Link
						className={`grid-item-${ind} portfolio-proyect`}
						to={`/proyectDesktop/${proyect.id}`}
					>
						<h1>{proyect.title}</h1>{" "}
						<img src={proyect.images[0]} alt='imagen-portada' />{" "}
					</Link>
				);
			})}
		</div>
	);
}
