import React from "react";
import { Link } from "react-router-dom";
import logoVertical from "../../assets/logo/Logo_Vertical.png";
import IconInstagram from "../../assets/icons/instagramIcon.svg";
import "./NavBarDesktop.scss";

export function NavBarDesktop() {
	const navBarDesktopStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				flexDirection: "column",
				height: "100vh",
				width: "20vw",
				padding: "40px 20px 20px 30px",
			}}
		>
			<div style={navBarDesktopStyle}>
				<i
					style={{
						backgroundImage: `url(${logoVertical})`,
						height: " 107px",
						width: "100px",
						backgroundPositionY: "center",
						backgroundPositionX: "center",
						marginBottom: "30px",
					}}
				></i>
				<nav
					style={{
						display: "flex",
						flexDirection: "column",
						paddingLeft: "8px",
					}}
				>
					<Link className='navBar-Link' to='/'>
						Bio
					</Link>
					<Link className='navBar-Link' to='/portfolio/1'>
						Portfolio Gráfico
					</Link>
					<Link className='navBar-Link' to='/portfolio/2'>
						Fotografía
					</Link>
					<Link className='navBar-Link' to='/portfolio/3'>
						Audiovisual
					</Link>
				</nav>
			</div>
			<a
				href='https://www.instagram.com/caminitoediciones/'
				style={{ width: "30px" }}
			>
				<img src={IconInstagram} alt='insta-icon' />
			</a>
		</div>
	);
}
