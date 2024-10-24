// src/App.tsx
import React from "react";
import UserForm from "./components/UserForm";
import PokemonList from "./components/PokemonList";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Insurance Portal</h1>
      <UserForm />
      <PokemonList />
    </div>
  );
};

export default App;
