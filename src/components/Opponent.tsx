import React from "react";
import styled from "@emotion/styled";
import Data from '../data/data'

const Opponent = (props:any) => {
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
        'background':`${props.bg}`
      }}
      >
      <OpponentInlay className='opponent-inlay'>
        {props.icon}
      </OpponentInlay>
    </OpponentContainer>
  )
}

export default Opponent