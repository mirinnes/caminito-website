import React from "react";
import { NavLink } from "react-router-dom";
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
					<NavLink
						exact={true}
						activeClassName='active'
						className='navBar-Link'
						to='/'
					>
						Bio
					</NavLink>
					<NavLink
						exact={true}
						activeClassName='active'
						className='navBar-Link'
						to='/portfolio/0'
					>
						Portfolio Gráfico
					</NavLink>
					<NavLink
						exact={true}
						activeClassName='active'
						className='navBar-Link'
						to='/portfolio/1'
					>
						Fotografía
					</NavLink>
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
