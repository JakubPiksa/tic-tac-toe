import React from "react";
import { useMachine } from "@xstate/react";
import { ticTacToeMachine } from "./stateMachine/ticTacToeMachine";
import GameBoard from "./components/GameBoard";
import GameInfo from "./components/GameInfo";

const App = () => {
  const [state, send] = useMachine(ticTacToeMachine);

  const handleSquareClick = (index) => {
    if (!state.context.board[index] && state.matches("playing")) {
      send({ type: "PLAY_MOVE", index });
    }
  };

  const handleReset = () => {
    send("RESET");
  };

  return (
    <div>
      <h1>Tic-Tac-Toe Game</h1>
      <GameBoard
        board={state.context.board}
        handleSquareClick={handleSquareClick}
      />
      <GameInfo
        currentPlayer={state.context.currentPlayer}
        winner={state.matches("won") ? state.context.currentPlayer : null}
        handleReset={handleReset}
      />
    </div>
  );
};

export default App;
