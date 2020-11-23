import React from "react";

import "./Slider.scss";
export function Slider({ img }) {
	return (
		<section className='slider-container'>
			<img className='slider-img' src={img} alt='slider-img' />
		</section>
	);
}
