import React from "react";
import "./dotsMenu.scss";
import dotsMenu from "../../assets/icons/dotsMenu.svg";

export default function DotsMenu({ onClick }) {
	return (
		<>
			<i onClick={onClick} className='dotsMenu'>
				<img className='dotsMenu-img' alt='dots-menu' src={dotsMenu} />
			</i>
		</>
	);
}
