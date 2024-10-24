// src/components/__tests__/UserForm.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import UserForm from "../UserForm";
import "@testing-library/jest-dom"; // Asegúrate de importar esto

test("updates the user name on input change", () => {
  render(
    <Provider store={store}>
      <UserForm />
    </Provider>
  );

  const input = screen.getByLabelText(/User Name:/i);
  fireEvent.change(input, { target: { value: "Ash Ketchum" } });

  expect(input).toHaveValue("Ash Ketchum");
});
