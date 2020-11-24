import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	PORTFOLIO_GRÁFICO,
	PORTFOLIO_FOTOGRAFIA,
} from "../assets/images/dataImages";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import OpenButton from "../components/OpenButton/OpenButton";
import "../layout/Portfolio/Portfolio.scss";

const PORTFOLIOS = [PORTFOLIO_GRÁFICO, PORTFOLIO_FOTOGRAFIA];
export const Home = () => {
	const [renderize, setRenderize] = useState(false);

	const closeProyects = () => {
		PORTFOLIOS.forEach((portfolio) => portfolio.setShowProyects(false));
	};

	const displayProyectsById = (idPortfolio) => {
		PORTFOLIOS.forEach((portfolio) =>
			portfolio.id === idPortfolio
				? portfolio.setShowProyects(true)
				: portfolio.setShowProyects(false)
		);
	};
	return (
		<>
			<Header />
			<div>
				{PORTFOLIOS.map((portfolio, ind) => {
					return (
						<div
							id={`porfolio${portfolio.id}`}
							className={`portfolioContainer ${
								portfolio.showProyects ? "" : "not-expanded"
							}`}
							key={portfolio.id}
						>
							<span>
								<p>{portfolio.title}</p>
								<OpenButton
									showProyects={portfolio.showProyects}
									ind={ind}
									porfolioId={portfolio.id}
									displayProyectsById={displayProyectsById}
									closeProyects={closeProyects}
									setRenderize={setRenderize}
									renderize={renderize}
								/>
							</span>

							{!portfolio.showProyects && (
								<div
									className='portfolioContainer-portada'
									key={ind}
									onClick={() => {
										displayProyectsById(portfolio.id);
										setRenderize(!renderize);
									}}
									style={{
										backgroundImage: `url(${portfolio.proyects[0].tapa})`,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPositionX: "center",
										height: "300px",
										borderRadius: "15px",
									}}
								>
									<h1>{portfolio.proyects[0].title}</h1>
									<h2>{portfolio.proyects[0].subTitle}</h2>
								</div>
							)}

							{portfolio.showProyects && (
								<div key={ind}>
									{portfolio.proyects.map((proyect, inx) => {
										return (
											<Link
												key={`portfolioLink-${inx}`}
												to={`/proyect/${proyect.id}`}
											>
												<div
													key={`portfolioLinkContainer-${inx}`}
													className='portfolioLink-container'
												>
													<img
														key={`portfolioLinkImg-${inx}`}
														className='portfolioContainer-img'
														src={proyect.tapa}
														alt='img-proyect'
													/>
													<h1
														key={`portfolioLinkTitle-${inx}`}
														className='portfolioLink-title'
													>
														{proyect.title}
													</h1>
													<h2
														key={`portfolioLinkSubtitle-${inx}`}
														className='portfolioLink-subtitle'
													>
														{proyect.subTitle}
													</h2>
												</div>
											</Link>
										);
									})}
								</div>
							)}
						</div>
					);
				})}
			</div>
			<Footer />
		</>
	);
};
