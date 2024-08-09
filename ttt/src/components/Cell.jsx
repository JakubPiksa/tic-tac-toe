import React from "react";
import styled from "styled-components";

const CellContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  cursor: pointer;
  background-color: #fff;
  border: 2px solid #333;
`;

const Cell = ({ value, onClick }) => {
  return <CellContainer onClick={onClick}>{value}</CellContainer>;
};

export default Cell;
