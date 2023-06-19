import React, { useContext } from "react";
import styled from "@emotion/styled";
// STATE
import { ScoreStateContext } from "./Layout";
import StartRound from "../animations/StartAnimation";
const breakpoints = [973]
const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)
const Restart = () => {
  //? VARIABLES
  const score = useContext(ScoreStateContext)
  //? STYLES
  const RestartContainer = styled.div`
    display:none;
    opacity:0;
    visibility: hidden;
    flex-direction:column;
    position:relative;
    z-index: 5;
    top:-15em;
    ${mq[0]} {
      top:4em;
    }
    
  `
  const RestartMessage = styled.h1`
    margin:0 auto;
    color: white;
    font-family: 'Barlow Semi Condensed';
    font-weight: 700;
    margin-bottom: .5em;
    font-size: 4em;
  `
  const RestartButton = styled.button`
    background-color: white;
    padding: 1em 2em;
    font-family: font-family: 'Barlow Semi Condensed';
    font-weight: 600;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    width:12em;
    margin:0 auto;
  `
  
  return (
    <RestartContainer className="restart-container">
      <RestartMessage>
        {score.message}
      </RestartMessage>
      <RestartButton
        onClick={() => {
          StartRound(score.player).timeScale(2.5).tweenTo(0).then(() => {
            StartRound(score.player).clear()
          })
        }}
      >
        PLAY AGAIN
      </RestartButton>
    </RestartContainer>
  )
}

export default Restart