// src/redux/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice"; // Importa tu slice de Pokémon
import userReducer from "./userSlice"; // Importa tu slice de Usuario

// Combina los reducers
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  user: userReducer,
});

export default rootReducer;
