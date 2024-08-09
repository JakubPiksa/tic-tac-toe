// src/tests/Game.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "../components/Game";

test("renders the game board", () => {
  render(<Game />);
  const cells = screen.getAllByRole("button");
  expect(cells).toHaveLength(9);
});

test("X player wins the game", () => {
  render(<Game />);

  const cells = screen.getAllByRole("button");
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[3]); // O
  fireEvent.click(cells[1]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[2]); // X

  expect(screen.getByText(/Player X Wins!/i)).toBeInTheDocument();
});

test("detects a draw", () => {
  render(<Game />);

  const cells = screen.getAllByRole("button");
  fireEvent.click(cells[0]); // X
  fireEvent.click(cells[1]); // O
  fireEvent.click(cells[2]); // X
  fireEvent.click(cells[4]); // O
  fireEvent.click(cells[3]); // X
  fireEvent.click(cells[5]); // O
  fireEvent.click(cells[7]); // X
  fireEvent.click(cells[6]); // O
  fireEvent.click(cells[8]); // X

  expect(screen.getByText(/It's a Draw!/i)).toBeInTheDocument();
});

test("reset button works", () => {
  render(<Game />);

  const resetButton = screen.getByText(/Reset/i);
  fireEvent.click(resetButton);

  const cells = screen.getAllByRole("button");
  cells.forEach((cell) => {
    expect(cell.textContent).toBe("");
  });
});
