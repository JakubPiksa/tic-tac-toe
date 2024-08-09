import React from "react";
import styled from "styled-components";

const SquareStyled = styled.button`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  border: 1px solid #000;
  background-color: #fff;
`;

const Square = ({ value, onClick }) => {
  return <SquareStyled onClick={onClick}>{value}</SquareStyled>;
};

export default Square;
