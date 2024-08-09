import React from "react";
import styled from "styled-components";
import Square from "./Square";

const BoardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
`;

const GameBoard = ({ board, handleSquareClick }) => {
  return (
    <BoardStyled>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </BoardStyled>
  );
};

export default GameBoard;
