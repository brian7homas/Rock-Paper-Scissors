import React from "react";
import styled from "@emotion/styled";

const ScoreboardContainer = styled.section`
  margin: 5em calc((100% - 30em)/3);
  padding: 1.5em 3em;
  border: 2px solid white;
  border-radius: 20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  line-height:2em;
  letter-spacing: .02em;
`
`
const Scoreboard = () => {
  return(
    <ScoreboardContainer>
      scoreboard
    </ScoreboardContainer>
  )
}

export default Scoreboard
