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
const CopyContainer = styled.section`
  font-family: 'Fjalla One';
  font-size: 2rem;
  font-weight: 800;
  color:white;
`
const ScoreContainer = styled.div`
  background-color:white;
  height: 200px;
  width: 200px;
  border-radius: 15px;
  position: relative;
  z-index:0;
`
const ScoreCopyContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align:center;
  height:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  font-family: 'Barlow Semi Condensed';
  padding:1.5em 0 4em 0;
`
const ScoreTitle = styled.p`
  font-size: 2rem;
  letter-spacing: .075em;
`
const ScoreNumber = styled.span`
  font-family: 'Fjalla One';
  font-size: 6rem;
  line-height:auto;
  letter-spacing: auto;
`
const Scoreboard = () => {
  return(
    <ScoreboardContainer>
      <CopyContainer>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
        <p>LIZARD</p>
        <p>SPOCK</p>
      </CopyContainer>
      <ScoreContainer>
        <ScoreCopyContainer>
          <ScoreTitle>SCORE</ScoreTitle>
          <ScoreNumber>12</ScoreNumber>
        </ScoreCopyContainer>
      </ScoreContainer>
    </ScoreboardContainer>
  )
}

export default Scoreboard
