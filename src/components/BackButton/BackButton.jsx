import React from "react";
import "./backButton.scss";
export default function BackButton() {
	return (
		<i className='backButton'>
			<img
				className='backButton-img'
				alt='back-button'
				src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxjaXJjbGUgcj0iMjU2IiBjeD0iMjU2IiBjeT0iMjU2IiBmaWxsPSIjZmZmZmZmIiBzaGFwZT0iY2lyY2xlIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcsMCwwLDAuNyw3Ni44MDAwMDAwMDAwMDAwMSw3Ni44MDAwMDAwMDAwMDAwMSkiPjwvY2lyY2xlPjxnIHRyYW5zZm9ybT0ibWF0cml4KDAuNywwLDAsMC43LDc2LjgwMDAwMDAwMDAwMDAxLDc2LjgwMDAwMDAwMDAwMDAxKSI+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTE0Ljg0NCwwLDAsMTE0Ljg0NCwwLDI1NnMxMTQuODQ0LDI1NiwyNTYsMjU2czI1Ni0xMTQuODQ0LDI1Ni0yNTZTMzk3LjE1NiwwLDI1NiwweiBNNDA1LjMzMywyNjYuNjY3ICAgIGMwLDUuODk2LTQuNzcxLDEwLjY2Ny0xMC42NjcsMTAuNjY3SDE3NS4wODNsNDUuNzkyLDQ1Ljc5MmMyLDIsMy4xMjUsNC43MDgsMy4xMjUsNy41NDJWMzUyYzAsNC4zMTMtMi41OTQsOC4yMDgtNi41ODMsOS44NTQgICAgYy00LDEuNjY3LTguNTczLDAuNzQtMTEuNjI1LTIuMzEzbC05Ni05NmMtNC4xNjctNC4xNjctNC4xNjctMTAuOTE3LDAtMTUuMDgzbDk2LTk2YzIuMDQyLTIuMDQyLDQuNzcxLTMuMTI1LDcuNTQyLTMuMTI1ICAgIGMxLjM3NSwwLDIuNzYsMC4yNiw0LjA4MywwLjgxM2MzLjk5LDEuNjQ2LDYuNTgzLDUuNTQyLDYuNTgzLDkuODU0djIxLjMzM2MwLDIuODMzLTEuMTI1LDUuNTQyLTMuMTI1LDcuNTQybC00NS43OTIsNDUuNzkyICAgIGgyMTkuNTgzYzUuODk2LDAsMTAuNjY3LDQuNzcxLDEwLjY2NywxMC42NjdWMjY2LjY2N3oiIGZpbGw9IiNjZTI2MjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+'
			/>{" "}
		</i>
	);
}