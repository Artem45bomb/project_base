import React from "react";
import RecipeItem from "../recipeItem/RecipeItem";




export default function App() {
	return (
		<>
			<div>
				<RecipeItem recipe={{
					id: 1,
					name: 'Лазанья',

				}}></RecipeItem>	
				<RecipeItem recipe={{
					id: 2,
					name: 'Лазанья',

				}}></RecipeItem>	
			</div>
		</>
	);
}