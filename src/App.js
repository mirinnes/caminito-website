import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataState from "./context/DataState";
import { Proyect } from "./pages/Proyect";
import { Home } from "./pages/Home";
import { HomeDesktop } from "./pages/HomeDesktop";
import { NavBarDesktop } from "./layout/NavBar/NavBarDesktop";
import { ProyectDesktop } from "./pages/ProyectDesktop";
import { PortfolioDesktop } from "./pages/PortfolioDesktop";
import FooterDesktop from "./layout/Footer/FooterDesktop";

import "./App.css";

function App() {
	const [isDesktop, setIsDesktop] = useState(true);
	const showDesktop = () => {
		if (window.innerWidth <= 1024) {
			setIsDesktop(false);
		} else {
			setIsDesktop(true);
		}
	};

	window.addEventListener("resize", showDesktop);
	return (
		<div className='App'>
			<DataState>
				<Router>
					{isDesktop ? (
						<>
							<div style={{ display: "flex", height: "90vh" }}>
								<NavBarDesktop />
								<Switch>
									<Route exact path='/' component={HomeDesktop} />
									<Route
										exact
										path='/portfolio/:id'
										component={PortfolioDesktop}
									/>
									<Route
										exact
										path='/proyectDesktop/:id'
										component={ProyectDesktop}
									/>
								</Switch>
							</div>
							<FooterDesktop />
						</>
					) : (
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/proyect/:id' component={Proyect} />
						</Switch>
					)}
				</Router>
			</DataState>
		</div>
	);
}

export default App;
