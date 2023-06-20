import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ScoreStateContext } from "./Layout";
import WinnerUnderlay from "./WinnerUnderlay";
const Opponent = (props:any) => {
  const score = useContext(ScoreStateContext)
  const OpponentContainer = styled.div`
  border:none;
  border-radius: 50% 50%;
  height: 175px;
  width: 175px;
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
  const OpponentInlay = styled.div`
  background: white;
  border:none;
  border-radius: 50% 50%;
  height: 145px;
  width: 145px;
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