import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import Person from "../components/Person";

test("load and display name", async () => {
  render(<Person />);
  const name = await waitFor(() => screen.findByTestId("name-input"));
  expect(name).toHaveTextContent("eyad");
});

test("load and display age", async () => {
  render(<Person />);
  const age = await waitFor(() => screen.findByTestId("age-input"));
  expect(age).toHaveTextContent("25");
});
test("load and dispaly the gender", async () => {
  render(<Person />);
  const gender = await waitFor(() => screen.findByTestId("gender-input"));
  expect(gender).toHaveTextContent("male");
});

// test("can change the input", async () => {
//   render(<App />);
//   const input = screen.getByTestId("name-input");
//   const name = screen.getByTestId("name");
//   fireEvent.change(input, { target: { value: "eyad" } });
//   expect(name).toHaveTextContent("eyad");
// });
