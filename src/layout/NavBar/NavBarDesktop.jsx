import React from "react";
import { Link } from "react-router-dom";
import logoVertical from "../../assets/logo/Logo_Vertical.png";
import IconInstagram from "../../assets/icons/instagramIcon.svg";
import "./NavBarDesktop.scss";

export function NavBarDesktop() {
	return (
		<div className='menuDesktop'>
			<div className='menuDesktop-navBarContainer'>
				<i
					className='menuDesktop-logo'
					style={{
						backgroundImage: `url(${logoVertical})`,
					}}
				></i>
				<nav className='menuDesktop-navBar'>
					<Link className='navBar-Link' to='/'>
						Bio
					</Link>
					<Link className='navBar-Link' to='/portfolio/0'>
						Portfolio Gráfico
					</Link>
					<Link className='navBar-Link' to='/portfolio/1'>
						Fotografía
					</Link>
				</nav>
			</div>
			<a
				href='https://www.instagram.com/caminitoediciones/'
				className='menuDesktop-insta'
			>
				<img src={IconInstagram} alt='insta-icon' />
			</a>
		</div>
	);
}
