import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ScoreStateContext } from "./Layout";
import WinnerUnderlay from "./WinnerUnderlay";
const breakpoints = [320, 375]
const mq = breakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)
const Opponent = (props:any) => {
  const score = useContext(ScoreStateContext)
  const OpponentContainer = styled.div`
  border:none;
  border-radius: 50% 50%;
  height: 15.5em;
  width: 15.5em;
  position: absolute;
  z-index:0;
  display:flex;
  justify-content:center;
  align-items:center;
  display:none;
  opacity:0;
  visibility:0;
  z-index:4;
  ${mq[1]}{
    left:4em;
  }
`
  const OpponentInlay = styled.div`
  background: white;
  border:none;
  border-radius: 50% 50%;
  height: 12em;
  width: 12em;
  position: absolute;
  z-index:0;
  display:flex;
  justify-content:center;
  align-items:center;
  display:none;
  opacity:0;
  visibility:0;
  z-index:4;
` 
  return(
    <OpponentContainer 
      className='opponent-container'
      style={{
        'background':`${score.houseBg}`
      }}
      >
      <WinnerUnderlay player="house"/>
      <OpponentInlay className='opponent-inlay'>
        {score.houseIcon}
      </OpponentInlay>
    </OpponentContainer>
  )
}

export default Opponent