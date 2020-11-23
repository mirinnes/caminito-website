import React, { useState } from "react";
import DotsMenu from "../../components/DotsMenu/DotsMenu";
import CloseButton from "../../components/CloseButton/CloseButton";
import { HashLink } from "react-router-hash-link";
import "./Header.scss";

// Icon
import infoCircle from "../../assets/icons/infoCircle.svg";
import logoCaminitoEdiciones from "../../assets/icons/logoCaminitoEdiciones.svg";

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
						<HashLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio1'
							className='menu-link'
							style={styleMenuLink}
						>
							Home
						</HashLink>
						<HashLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio1'
							className='menu-link'
							style={styleMenuLink}
						>
							Portfolio Gráfico
						</HashLink>
						<HashLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio2'
							className='menu-link'
							style={styleMenuLink}
						>
							Fotografía
						</HashLink>
						<HashLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio3'
							className='menu-link'
							style={styleMenuLink}
						>
							Audiovisual
						</HashLink>
						<HashLink
							smooth
							onClick={onClickDotsMenu}
							to='/#portfolio3'
							className='menu-link'
							style={styleMenuLink}
						>
							Contacto
						</HashLink>
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
				<img className='infoCircle' src={infoCircle} alt='' />
			</header>
		</>
	);
}
