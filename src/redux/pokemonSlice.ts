// src/redux/pokemonSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null,
};

// Thunk para obtener los Pokemon desde la API
export const fetchPokemon = createAsyncThunk<Pokemon[], void>(
  "pokemon/fetchPokemon",
  async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    return (await response.json()).results;
  },
);

// Crear el Slice
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchPokemon.fulfilled,
        (state, action: PayloadAction<Pokemon[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        },
      )
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch Pokemon";
      });
  },
});

export default pokemonSlice.reducer;
