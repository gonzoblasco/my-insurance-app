// src/components/__tests__/Greeting.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react"; // Ahora 'screen' viene de '@testing-library/react'
import "@testing-library/jest-dom"; // Importar los matchers adicionales
import Greeting from "../Greeting";

test("renders the greeting message", () => {
  render(<Greeting name="Frontend Engineer" />);
  const greetingElement = screen.getByText(/Hello, Frontend Engineer/i);
  expect(greetingElement).toBeInTheDocument();
});
