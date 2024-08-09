import { createMachine, assign } from "xstate";

export const ticTacToeMachine = createMachine(
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
        on: {
          START: "playing",
        },
      },
      playing: {
        on: {
          PLAY_MOVE: {
            actions: "makeMove",
            target: "checkingWinner",
          },
        },
      },
      checkingWinner: {
        always: [
          {
            target: "won",
            guard: "checkWinner",
          },
          {
            target: "draw",
            guard: "checkDraw",
          },
          {
            target: "playing",
          },
        ],
      },
      won: {
        on: {
          RESET: {
            target: "idle",
            actions: "resetGame",
          },
        },
      },
      draw: {
        on: {
          RESET: {
            target: "idle",
            actions: "resetGame",
          },
        },
      },
    },
  },
  {
    actions: {
      makeMove: assign({
        board: (context, event) => {
          const newBoard = [...context.board];
          newBoard[event.index] = context.currentPlayer;
          return newBoard;
        },
        currentPlayer: (context) => (context.currentPlayer === "X" ? "O" : "X"),
      }),
      resetGame: assign({
        board: () => Array(9).fill(null),
        currentPlayer: () => "X",
        winner: () => null,
      }),
    },
    guards: {
      checkWinner: (context) => {
        const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (
            context.board[a] &&
            context.board[a] === context.board[b] &&
            context.board[a] === context.board[c]
          ) {
            return true;
          }
        }
        return false;
      },
      checkDraw: (context) => context.board.every((cell) => cell !== null),
    },
  }
);
