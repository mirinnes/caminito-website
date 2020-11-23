/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
	switch (action.type) {
		case "SET_SHOWPROYECTS":
			state.portfolios[action.payload.findedIndex].showProyects = !action
				.payload.toggle;
			return state;
		case "SET_HIDEPORTFOLIOS_TRUE":
			state.portfolios.forEach((portfolio, inx) => {
				if (inx !== action.payload.idSelected) {
					console.log(
						"El portfolio",
						inx,
						"no es ",
						action.payload.idSelected,
						".\n Por eso cambia."
					);
					portfolio.hidePortfolio = true;
				}
			});
			console.log("Se actualizaron los proyects\n");
			console.log("El state modificado es\n", state);
			return state;
		case "SET_HIDEPORTFOLIOS_FALSE":
			state.portfolios.forEach((portfolio) => {
				portfolio.hidePortfolio = false;
			});
			console.log("Se actualizaron los proyects\n");
			console.log("El state modificado es\n", state);
			return state;
		case "SET_SHOWPROYECT":
			state.portfolios[action.payload.indexPortfolio].proyects[
				action.payload.indexPortfolio
			].showProyect = !action.payload.toggle;
			return state;
		default:
			return state;
	}
};
