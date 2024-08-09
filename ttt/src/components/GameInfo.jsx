import React from "react";
import styled from "styled-components";

const InfoStyled = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
`;

const ButtonStyled = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const GameInfo = ({ currentPlayer, winner, handleReset }) => {
  return (
    <InfoStyled>
      {winner ? (
        <div>Winner: {winner}</div>
      ) : (
        <div>Next Player: {currentPlayer}</div>
      )}
      <ButtonStyled onClick={handleReset}>Reset Game</ButtonStyled>
    </InfoStyled>
  );
};

export default GameInfo;
