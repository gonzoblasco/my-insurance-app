// src/components/__tests__/PokemonList.test.tsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import PokemonList from "../PokemonList";

// Mockear fetch manualmente
globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        ],
      }),
  })
) as jest.Mock;

test("renders the list of Pokémon from the API", async () => {
  render(
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // Esperar que los Pokémon se rendericen
  await waitFor(() => screen.getByText(/bulbasaur/i));
  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  expect(screen.getByText(/ivysaur/i)).toBeInTheDocument();
});
