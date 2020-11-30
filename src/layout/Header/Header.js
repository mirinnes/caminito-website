import React, { useState } from "react";
import DotsMenu from "../../components/DotsMenu/DotsMenu";
import { NavLink } from "react-router-dom";

import CloseButton from "../../components/CloseButton/CloseButton";
import RedCircle from "../../components/RedCircle/RedCircle";
import "./Header.scss";

// Icon
import logoCaminitoEdiciones from "../../assets/logo/Logo_Horizontal_short.png";

export default function Header() {
	const styleMenuLink = { color: "white", fontSize: "15px" };
	const [displayMenu, setDisplayMenu] = useState(false);
	const onClickDotsMenu = () => setDisplayMenu(!displayMenu);
	return (
		<>
			<div className={`menu-overlay ${displayMenu ? "isDisplayed" : ""}`}>
				<div className={`menu-container ${displayMenu ? "isDisplayed" : ""}`}>
					<CloseButton onClick={onClickDotsMenu} />
					<nav className='menu-title'>
						<NavLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio1'
							className='menu-link'
							style={styleMenuLink}
						>
							Home
						</NavLink>
						<NavLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio1'
							className='menu-link'
							style={styleMenuLink}
						>
							Portfolio Gráfico
						</NavLink>
						<NavLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio2'
							className='menu-link'
							style={styleMenuLink}
						>
							Fotografía
						</NavLink>
						<NavLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio3'
							className='menu-link'
							style={styleMenuLink}
						>
							Audiovisual
						</NavLink>
						<NavLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio3'
							className='menu-link'
							style={styleMenuLink}
						>
							Contacto
						</NavLink>
					</nav>
				</div>
			</div>

			<header className='main-header'>
				<DotsMenu onClick={onClickDotsMenu} />

				<img
					className='logoCaminitoEdiciones'
					src={logoCaminitoEdiciones}
					alt=''
				/>
				<RedCircle size='small' />
			</header>
		</>
	);
}
