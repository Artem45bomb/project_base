import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload: recipe }) => {
			if (state.some(r => r.id === recipe.id)) {
				state = state.filter(r => r.id === recipe.id);
			}
			else {
				state.push(recipe);
			}
		}
	}
});



export const { actions, reducer } = favoritesSlice;
