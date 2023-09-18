import React from "react";
import { useSelector } from "react-redux";



export default function RecipeItem({ recipe }) {
	return (
		<div className={"item"}>
			{/*<img src="" alt=""/>*/}
			<h3>{recipe.name}</h3>
			<button>Add to favorites</button>
		</div>
	);
}