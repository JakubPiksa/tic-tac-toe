import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Tic-Tac-Toe Game title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Tic-Tac-Toe Game/i);
  expect(titleElement).toBeInTheDocument();
});

test("allows players to take turns", () => {
  render(<App />);
  const squares = screen.getAllByRole("button");
  fireEvent.click(squares[0]);
  expect(squares[0]).toHaveTextContent("X");
  fireEvent.click(squares[1]);
  expect(squares[1]).toHaveTextContent("O");
});

test("resets the game board", () => {
  render(<App />);
  const squares = screen.getAllByRole("button");
  fireEvent.click(squares[0]);
  fireEvent.click(squares[1]);
  const resetButton = screen.getByText(/Reset Game/i);
  fireEvent.click(resetButton);
  squares.forEach((square) => {
    expect(square).toBeEmptyDOMElement();
  });
});
