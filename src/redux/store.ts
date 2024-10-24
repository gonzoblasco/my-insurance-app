// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pokemonReducer from "./pokemonSlice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    user: userReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
