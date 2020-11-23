import React, { useReducer } from "react";
import DataContext from "./dataContext";
import DataReducer from "./dataReducer";

// Images
import imgProy1 from "../assets/images/pro_1.jpg";
import imgProy2 from "../assets/images/pro_2.jpg";
import imgProy3 from "../assets/images/pro_3.jpg";
import imgProy4 from "../assets/images/pro_4.jpg";
import imgProy5 from "../assets/images/pro_5.jpg";

const DataState = ({ children }) => {
	class Proyect {
		constructor(
			idProyect,
			title,
			subTitle,
			description,
			imgPortadaProyect,
			images,
			showProyect
		) {
			this.idProyect = idProyect;
			this.title = title;
			this.subTitle = subTitle;
			this.description = description;
			this.imgPortadaProyect = imgPortadaProyect;
			this.images = images;
			this.showProyect = showProyect;
		}
	}

	class Portfolio {
		constructor(
			idPortfolio,
			title,
			proyPortada,
			proyects,
			showProyects,
			hidePortfolio
		) {
			this.idPortfolio = idPortfolio;
			this.title = title;
			this.proyPortada = proyPortada;
			this.proyects = proyects;
			this.showProyects = showProyects;
			this.hidePortfolio = hidePortfolio;
		}
	}

	// Data Proyectos
	const proy1 = new Proyect(
		1,
		"Portfolio Gráfico",
		"Kaneta de Bambu",
		"Descripcion proyecto 1",
		imgProy1,
		[imgProy1, imgProy1, imgProy1],
		false
	);
	const proy2 = new Proyect(
		2,
		"Portfolio Gráfico",
		"Kaneta de Bambu",
		"Descripcion proyecto 2",
		imgProy2,
		[imgProy2, imgProy2, imgProy2],
		false
	);
	const proy3 = new Proyect(
		3,
		"Portfolio Gráfico",
		"Kaneta de Bambu",
		"Descripcion proyecto 3",
		imgProy3,
		[imgProy3, imgProy3, imgProy3],
		false
	);
	const proy4 = new Proyect(
		4,
		"Portfolio Gráfico",
		"Kaneta de Bambu",
		"Descripcion proyecto 4",
		imgProy4,
		[imgProy4, imgProy4, imgProy4],
		false
	);
	const proy5 = new Proyect(
		5,
		"Portfolio Gráfico",
		"Kaneta de Bambu",
		"Descripcion proyecto 5",
		imgProy5,
		[imgProy5, imgProy5, imgProy5],
		false
	);

	// Data Portfolios
	const portfolio1 = new Portfolio(
		1, //idPortfolio
		"Portfolio Gráfico", //title
		proy1, //proyPortada
		[proy1, proy2, proy3], //proyects
		false, //showContent
		false //hidePortfolio
	);
	const portfolio2 = new Portfolio(
		2,
		"Portfolio Audiovisual",
		proy3,
		[proy3, proy4],
		false,
		false
	);
	const portfolio3 = new Portfolio(
		3,
		"Portfolio Fotográfico",
		proy2,
		[proy2, proy4, proy5],
		false,
		false
	);

	// Initial State Data
	const initialState = {
		portfolios: [portfolio1, portfolio2, portfolio3],
		selectedPortfolio: false,
		loading: false,
	};

	// States
	const [state, dispatch] = useReducer(DataReducer, initialState);

	// Update Portfolios
	// const updatePortfolios = () => {

	// }

	// Toggle Show Content Portfolio
	const desplegarPortfolio = (idSelected) => {
		const findedIndex = state.portfolios.findIndex(
			(portfolio) => portfolio.idPortfolio === idSelected
		);
		if (findedIndex === -1) {
			throw new Error("No fue encontrado el portfolio");
		} else {
			const toggle = state.portfolios[findedIndex].showProyects;
			dispatch({ type: "SET_SHOWPROYECTS", payload: { toggle, findedIndex } });
		}
	};

	// True Hide Portfolio
	const HidePortfoliosTrue = (idSelected) => {
		dispatch({
			type: "SET_HIDEPORTFOLIOS_TRUE",
			payload: { idSelected },
		});
	};
	// True Hide Portfolio
	const hidePortfoliosFalse = () => {
		dispatch({
			type: "SET_HIDEPORTFOLIOS_FALSE",
		});
	};
	// Toggle Show Proyect
	const desplegarProyecto = (idPortfolioSelected, idProySelected) => {
		const indexPortfolio = state.portfolios.findIndex(
			(portfolio) => portfolio.idPortfolio === idPortfolioSelected
		);
		if (indexPortfolio === -1) {
			throw new Error("No fue encontrado el portfolio seleccionado");
		} else {
			HidePortfoliosTrue(indexPortfolio);
			const indexProy = state.portfolios[indexPortfolio].proyects.findIndex(
				(proyect) => proyect.idProyect === idProySelected
			);
			if (indexProy === -1) {
				throw new Error("No fue encontrado el proyecto seleccionado");
			} else {
				const toggle =
					state.portfolios[indexPortfolio].proyects[indexProy].showProyect;
				dispatch({
					type: "SET_SHOWPROYECT",
					payload: { toggle, indexPortfolio, indexProy },
				});
			}
		}
	};

	// Set Loading
	//const setLoading = () => dispatch({type: SET_LOADING});

	return (
		<DataContext.Provider
			value={{
				portfolios: state.portfolios,
				selectedPortfolio: state.selectedPortfolio,
				desplegarPortfolio,
				desplegarProyecto,
				hidePortfoliosFalse,
				HidePortfoliosTrue,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataState;
