import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
	PORTFOLIO_GRÁFICO,
	PORTFOLIO_FOTOGRAFIA,
} from "../assets/images/dataImages";
import "../layout/Portfolio/PortfolioDesktop.scss";
const PORTFOLIOS = [PORTFOLIO_GRÁFICO, PORTFOLIO_FOTOGRAFIA];

export function PortfolioDesktop({ match }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const portfolio = PORTFOLIOS.find((item) => {
		return item.id === Number(match.params.id);
	});

	return (
		<div className='portfolioDesktop-container'>
			{portfolio.proyects.map((proyect, ind) => {
				return (
					<Link
						style={{
							backgroundImage: `url(${proyect.tapa})`,
							backgroundSize: "cover",
						}}
						className={`grid-item-${ind} portfolio-proyect`}
						to={`/proyectDesktop/${proyect.id}`}
					>
						<div className='portfolioDesktop-overlay'>
							<h1>
								{proyect.title}
								<p>{proyect.subTitle}</p>
							</h1>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
