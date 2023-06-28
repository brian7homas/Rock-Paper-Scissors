import React, { useContext } from "react";
import { gsap } from "gsap";
import styled from "@emotion/styled";
// STATE
import { ScoreStateContext } from "./Layout";
import RestartAnimation from "../animations/RestartAnimation";
const breakpoints = [973, 490, 1344, 685, 375, 320]
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
    position:absolute;
    z-index: 5;

    ${mq[0]} {
      top:4em;
    }
    ${mq[1]} {
      top:10em;
    }
    ${mq[2]} {
      top:3em;
    }
    ${mq[3]} {
      top:0;
      position:relative
    }
    ${mq[4]} {
      top:6.5em;
    }
    ${mq[5]} {
      top:1.5em;
    }
    
    
  `
  const RestartMessage = styled.h1`
    margin:0 auto;
    color: white;
    font-family: 'Barlow Semi Condensed';
    font-weight: 700;
    margin-bottom: .3em;
    font-size: 6em;
  `
  const RestartButton = styled.button`
    background-color: white;
    padding: .7em 2em;
    font-family: font-family: 'Barlow Semi Condensed';
    font-weight: 600;
    border-radius: 10px;
    font-size: 1.8rem;
    cursor: pointer;
    width:13em;
    margin:0 auto;
  `
  
  return (
    <RestartContainer className="restart-container">
      <RestartMessage>
        {score.message}
      </RestartMessage>
      <RestartButton
        className="restart-button"
        onClick={() => {
          RestartAnimation(score.player, score.playerBg).play()
        }}
      >
        PLAY AGAIN
      </RestartButton>
    </RestartContainer>
  )
}

export default Restart