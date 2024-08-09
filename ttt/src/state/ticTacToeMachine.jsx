// src/state/ticTacToeMachine.js
import { createMachine, assign } from "xstate";

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const isBoardFull = (board) => {
  return board.every((cell) => cell !== null);
};

const ticTacToeMachine = createMachine(
  {
    id: "ticTacToe",
    initial: "idle",
    context: {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    },
    states: {
      idle: {
        on: { START: "playing" },
      },
      playing: {
        on: {
          MAKE_MOVE: {
            actions: "makeMove",
            target: "checkOutcome",
          },
        },
      },
      checkOutcome: {
        always: [
          { cond: "hasWinner", target: "won" },
          { cond: "isDraw", target: "draw" },
          { target: "playing" },
        ],
      },
      won: {
        type: "final",
      },
      draw: {
        type: "final",
      },
    },
  },
  {
    actions: {
      makeMove: assign({
        board: (context, event) => {
          const updatedBoard = [...context.board];
          updatedBoard[event.index] = context.currentPlayer;
          return updatedBoard;
        },
        currentPlayer: (context) => (context.currentPlayer === "X" ? "O" : "X"),
      }),
    },
    guards: {
      hasWinner: (context) => {
        const winner = checkWinner(context.board);
        return winner !== null;
      },
      isDraw: (context) => isBoardFull(context.board),
    },
  }
);

export default ticTacToeMachine;
