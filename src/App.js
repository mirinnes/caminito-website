import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Proyect } from "./pages/Proyect";
import { Home } from "./pages/Home";
import { HomeDesktop } from "./pages/HomeDesktop";
import { NavBarDesktop } from "./layout/NavBar/NavBarDesktop";
import { ProyectDesktop } from "./pages/ProyectDesktop";
import { PortfolioDesktop } from "./pages/PortfolioDesktop";

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

	useEffect(() => showDesktop(), []);

	window.addEventListener("resize", showDesktop);
	return (
		<div className='App'>
			<Router>
				{isDesktop ? (
					<>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
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
					</>
				) : (
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/proyect/:id' component={Proyect} />
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
