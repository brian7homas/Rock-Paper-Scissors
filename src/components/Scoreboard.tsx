import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ScoreStateContext } from "./Layout";

const breakpoints = [685, 414]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

const ScoreboardContainer = styled.section`
  margin: 5em calc((100% - 30em)/3.4) 7em calc((100% - 30em)/3.113);
  padding: 1.6em 2.7em;
  border: 2px solid white;
  border-radius: 5px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  line-height:2.33em;
  letter-spacing: .2em;
  ${mq[0]} {
    margin: 2em calc((100% - 20em)/3) 7em calc((100% - 20em)/3);
  }
  ${mq[1]}{
    margin:3em calc((100% - 20em)/5.7) 0em calc((100% - 20em)/5.7);
    padding:1em;
    line-height:.95em;
  }
  
`
const CopyContainer = styled.section`
  font-family: 'Fjalla One';
  font-size: 2.6rem;
  font-weight: 800;
  color:white;
  ${mq[1]}{
    font-size: 1em;
    margin-left:1.2em;
  }
`
const ScoreContainer = styled.div`
  background-color:white;
  height: 11.3em;
  width: 15em;
  border-radius: 5px;
  position: relative;
  z-index:0;
  padding:1em;
  ${mq[1]}{
    height: 7.4em;
    width: 8em;
  }
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
  height:100%;
  ${mq[1]}{
    margin:0 .5em;
  }
`
const ScoreTitle = styled.p`
  font-size: 1.8rem;
  letter-spacing: .075rem;
  ${mq[1]}{
    font-size: 1.3rem;
  }
`
const ScoreNumber = styled.span`
  font-family: 'Fjalla One';
  font-size: 5.5rem;
  line-height:auto;
  letter-spacing: auto;
  ${mq[1]}{
    font-size: 3.5rem;
  }
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
          <ScoreNumber className="points">{!localStorage.getItem('player')? score.playerPoints : localStorage.getItem('player')}</ScoreNumber>
        </ScoreCopyContainer>
      </ScoreContainer>
    </ScoreboardContainer>
  )
}

export default Scoreboard
