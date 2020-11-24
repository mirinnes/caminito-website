import React from "react";
import upArrow from "../../assets/icons/upArrow.svg";

import "./Footer.scss";

// Icon
import instaIcon from "../../assets/icons/instagramIcon.svg";

export default function Footer() {
	return (
		<footer className='main-footer'>
			<div className='main-footer-backUp'>
				<button onClick={() => window.scrollTo(0, 0)}>
					<img className='upArrow' src={upArrow} alt='' />
				</button>
			</div>
			<div className='main-footer-media'>
				<a href='https://www.instagram.com/caminitoediciones/'>
					<img className='instaIcon' src={instaIcon} alt='' />
				</a>
				<p>@ 2020 Caminito Ediciones</p>
			</div>
		</footer>
	);
}
