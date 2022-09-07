import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import Person from "../components/Person";

test("load and display name", async () => {
  render(<Person />);
  const nameOutput = screen.getByTestId("name-output");
  const nameInput = screen.getByTestId("name-input");
  fireEvent.change(nameInput, { target: { value: "eyad" } });
  expect(nameOutput).toHaveTextContent("eyad");
});

test("load and display age", async () => {
  render(<Person />);
  const ageOutput = screen.getByTestId("age-output");
  const ageInput = screen.getByTestId("age-input");
  fireEvent.change(ageInput, { target: { value: "25" } });
  expect(ageOutput).toHaveTextContent("25");
});

test("load and dispaly the gender", async () => {
  render(<Person />);
  const genderOutput = screen.getByTestId("gender-output");
  const genderInput = screen.getByTestId("gender-input");
  fireEvent.change(genderInput, { target: { value: "male" } });
  expect(genderOutput).toHaveTextContent("male");
});

// test("can change the input", async () => {
//   render(<App />);
//   const input = screen.getByTestId("name-input");
//   const name = screen.getByTestId("name");
//   fireEvent.change(input, { target: { value: "eyad" } });
//   expect(name).toHaveTextContent("eyad");
// });
