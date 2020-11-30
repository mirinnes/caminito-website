import React from "react";
import upArrow from "../../assets/icons/upArrow.svg";
import RedCircle from "../../components/RedCircle/RedCircle";
import "./Footer.scss";

// Icon
import instaIcon from "../../assets/icons/instagramIcon.svg";

export default function Footer({ inProyect }) {
	return (
		<footer className={`main-footer ${inProyect}`}>
			<div className={`main-footer-backUp ${inProyect}`}>
				<button onClick={() => window.scrollTo(0, 0)}>
					<img className='upArrow' src={upArrow} alt='' />
				</button>
				<RedCircle />
			</div>
			<div className={`main-footer-media ${inProyect}`}>
				<a href='https://www.instagram.com/caminitoediciones/'>
					<img className='instaIcon' src={instaIcon} alt='' />
				</a>
				<p>#SCulturaemSuaCasa</p>
				<p>@ 2020 Caminito Ediciones</p>
			</div>
		</footer>
	);
}
