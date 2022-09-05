import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("load and display start data", async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId("name"));
  expect(name).toHaveTextContent("my name is eyad");
});

test("can change the name", async () => {
  render(<App />);
  const input = screen.getByTestId("name-input");
  const name = screen.getByTestId("name");
  fireEvent.change(input, { target: { value: "eyad" } });
  expect(name).toHaveTextContent("eyad");
});
