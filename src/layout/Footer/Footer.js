import React from "react";
import upArrow from "../../assets/icons/upArrow.svg";

import "./Footer.scss";

// Icon
import instaIcon from "../../assets/icons/instagramIcon.svg";

export default function Footer() {
	return (
		<footer className='main-footer'>
			<div className='main-footer-backUp'>
				<button>
					<img className='upArrow' src={upArrow} alt='' />
				</button>
			</div>
			<div className='main-footer-media'>
				<img className='instaIcon' src={instaIcon} alt='' />
				<p>@ 2020 Caminito Ediciones</p>
			</div>
		</footer>
	);
}
