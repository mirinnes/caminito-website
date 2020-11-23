// Images
import siam1 from "./proyect-1/siames-1.jpg";
import siam2 from "./proyect-1/siames-2.jpg";
import siam3 from "./proyect-1/siames-3.jpg";
import siam4 from "./proyect-1/siames-4.jpg";

import persa1 from "./proyect-2/persa-1.jpg";
import persa2 from "./proyect-2/persa-2.jpg";
import persa3 from "./proyect-2/persa-3.jpg";
import persa4 from "./proyect-2/persa-4.jpg";

import ango1 from "./proyect-3/angora-1.jpg";
import ango2 from "./proyect-3/angora-2.jpg";
import ango3 from "./proyect-3/angora-3.jpg";
import ango4 from "./proyect-3/angora-4.jpg";

import ragd1 from "./proyect-4/ragdoll-1.jpg";
import ragd2 from "./proyect-4/ragdoll-2.jpg";
import ragd3 from "./proyect-4/ragdoll-3.jpg";
import ragd4 from "./proyect-4/ragdoll-4.jpg";

import sibe1 from "./proyect-5/siberiano-1.jpg";
import sibe2 from "./proyect-5/siberiano-2.jpg";
import sibe3 from "./proyect-5/siberiano-3.jpg";
import sibe4 from "./proyect-5/siberiano-4.jpg";
import sibe5 from "./proyect-5/siberiano-5.jpg";

// Proyects
export const PROY_IMG_SIAMES = [siam1, siam2, siam3, siam4];
export const PROY_IMG_PERSA = [persa1, persa2, persa3, persa4];
export const PROY_IMG_ANGORA = [ango1, ango2, ango3, ango4];
export const PROY_IMG_RAGDOLL = [ragd1, ragd2, ragd3, ragd4];
export const PROY_IMG_SIBERIANO = [sibe1, sibe2, sibe3, sibe4, sibe5];

class Proyect {
	constructor(id, title, subTitle, description, images) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.description = description;
		this.images = images;
	}
}

export const SLIDER_PROYECTS = [
	{ title: "Kaneta de Bambu", portfolio: "Portfolio gráfico", img: siam1 },
	{
		title: "Fotografia Autoral",
		portfolio: "Portfolio Audiovisual",
		img: siam2,
	},
	{ title: "Kaneta de Bambu", portfolio: "Portfolio Audiovisual", img: siam3 },
];

export const PROY_SIAMES = new Proyect(
	1,
	"Kit Caneta de Bambu",
	"Producción caminito",
	`Compartilhando a experiencia de desenhar utilizando a técnica de nanquim. Rabiscos, tipografias, desenhos, tramas, em miniatura o grande formato.

	Inclui:
	• Caneta de bambu feita a mão.
	• Nanquim preto 5ml.
	• Livrinho dicas de uso.
	
	Seja livre para criar o seu mundo`,
	PROY_IMG_SIAMES
);
export const PROY_PERSA = new Proyect(
	2,
	"Kit Caneta de Bambu",
	"Producción caminito",
	`Compartilhando a experiencia de desenhar utilizando a técnica de nanquim. Rabiscos, tipografias, desenhos, tramas, em miniatura o grande formato.

	Inclui:
	• Caneta de bambu feita a mão.
	• Nanquim preto 5ml.
	• Livrinho dicas de uso.
	
	Seja livre para criar o seu mundo`,
	PROY_IMG_PERSA
);
export const PROY_ANGORA = new Proyect(
	3,
	"Kit Caneta de Bambu",
	"Producción caminito",
	`Compartilhando a experiencia de desenhar utilizando a técnica de nanquim. Rabiscos, tipografias, desenhos, tramas, em miniatura o grande formato.

	Inclui:
	• Caneta de bambu feita a mão.
	• Nanquim preto 5ml.
	• Livrinho dicas de uso.
	
	Seja livre para criar o seu mundo`,
	PROY_IMG_ANGORA
);
export const PROY_RAGDOLL = new Proyect(
	4,
	"Kit Caneta de Bambu",
	"Producción caminito",
	`Compartilhando a experiencia de desenhar utilizando a técnica de nanquim. Rabiscos, tipografias, desenhos, tramas, em miniatura o grande formato.

	Inclui:
	• Caneta de bambu feita a mão.
	• Nanquim preto 5ml.
	• Livrinho dicas de uso.
	
	Seja livre para criar o seu mundo`,
	PROY_IMG_RAGDOLL
);
export const PROY_SIBERIANO = new Proyect(
	5,
	"Kit Caneta de Bambu",
	"Producción caminito",
	`Compartilhando a experiencia de desenhar utilizando a técnica de nanquim. Rabiscos, tipografias, desenhos, tramas, em miniatura o grande formato.

	Inclui:
	• Caneta de bambu feita a mão.
	• Nanquim preto 5ml.
	• Livrinho dicas de uso.
	
	Seja livre para criar o seu mundo`,
	PROY_IMG_SIBERIANO
);

// Portfolios
class Portfolio {
	constructor(id, title, proyects) {
		this.id = id;
		this.title = title;
		this.proyects = proyects;
		this.showProyects = false;
	}

	setShowProyects = (state) => {
		this.showProyects = state;
	};
}

export const PORTFOLIO_CAROS = new Portfolio(1, "Portfolio gráfico", [
	PROY_SIAMES,
	PROY_PERSA,
	PROY_ANGORA,
]);
export const PORTFOLIO_BARATOS = new Portfolio(2, "Portfolio gráfico", [
	PROY_SIBERIANO,
	PROY_RAGDOLL,
]);
export const PORTFOLIO_BUENOS = new Portfolio(3, "Portfolio gráfico", [
	PROY_RAGDOLL,
	PROY_ANGORA,
	PROY_PERSA,
]);
