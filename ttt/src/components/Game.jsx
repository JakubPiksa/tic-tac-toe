// src/components/Game.js
import React from "react";
import { useMachine } from "@xstate/react";
import styled from "styled-components";
import ticTacToeMachine from "../state/ticTacToeMachine";
import Board from "./Board";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Message = styled.div`
  margin: 20px;
  font-size: 24px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Game = () => {
  const [state, send] = useMachine(ticTacToeMachine);
  const { board, currentPlayer } = state.context;

  const handleCellClick = (index) => {
    if (state.matches("playing") && !board[index]) {
      send({ type: "MAKE_MOVE", index });
    }
  };

  const handleReset = () => {
    send("START");
  };

  return (
    <GameContainer>
      <Message>
        {state.matches("playing") && `Player ${currentPlayer}'s Turn`}
        {state.matches("won") &&
          `Player ${currentPlayer === "X" ? "O" : "X"} Wins!`}
        {state.matches("draw") && "It's a Draw!"}
      </Message>
      <Board board={board} onCellClick={handleCellClick} />
      <Button onClick={handleReset}>Reset</Button>
    </GameContainer>
  );
};

export default Game;
