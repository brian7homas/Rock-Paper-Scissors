import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ScoreStateContext } from "./Layout";

const breakpoints = [685]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const ScoreboardContainer = styled.section`
  margin: 2em calc((100% - 30em)/3) 7em calc((100% - 30em)/3);
  padding: 1.5em 1em;
  border: 2px solid white;
  border-radius: 20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  line-height:1.5em;
  letter-spacing: .02em;
`
const CopyContainer = styled.section`
  font-family: 'Fjalla One';
  font-size: 1.6rem;
  font-weight: 800;
  color:white;
`
const ScoreContainer = styled.div`
  background-color:white;
  height: 75px;
  width: 110px;
  border-radius: 5px;
  position: relative;
  z-index:0;
`
const ScoreCopyContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align:center;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  font-family: 'Barlow Semi Condensed';
  margin:.5em;
  line-height:initial;
`
const ScoreTitle = styled.p`
  font-size: 1.4rem;
  letter-spacing: .075rem;
`
const ScoreNumber = styled.span`
  font-family: 'Fjalla One';
  font-size: 4.5rem;
  line-height:auto;
  letter-spacing: auto;
`
const Scoreboard = () => {
  const score = useContext(ScoreStateContext)
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
          <ScoreNumber className="points">{score.playerPoints}</ScoreNumber>
        </ScoreCopyContainer>
      </ScoreContainer>
    </ScoreboardContainer>
  )
}

export default Scoreboard
