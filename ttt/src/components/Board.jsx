import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
`;

const Board = ({ board, onCellClick }) => {
  return (
    <BoardContainer>
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </BoardContainer>
  );
};

export default Board;
