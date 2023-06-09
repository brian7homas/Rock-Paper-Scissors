import React from "react";
import styled from "@emotion/styled";

const BoardContainer = styled.section`
  margin: 5em auto 0 auto;
  position:relative;
  display: grid;
`
const Board = () => {
  return(
    <BoardContainer>
      <Pentagon 
        css={css`
            position:absolute;
            z-index:0;
            place-self: center;
            `}
      />
    </BoardContainer>
  )
}

export default Board
