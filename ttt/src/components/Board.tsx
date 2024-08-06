import { FC } from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 5px;
  border: 1px solid white;
`;

export const Board: FC = () => {
  return (
    <BoardContainer>
      <Grid>kaczka</Grid>
    </BoardContainer>
  );
};
