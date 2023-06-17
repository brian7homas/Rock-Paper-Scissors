import React, { useContext } from "react";
import styled from "@emotion/styled";

const Restart = () => {
  //? STYLES
  const RestartContainer = styled.div`
    display:none;
    opacity:0;
    visibility: hidden;
    flex-direction:column;
    
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
    padding: 1em 3em;
    font-family: font-family: 'Barlow Semi Condensed';
    font-weight: 600;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;
  `
  
  return (
    <RestartContainer className="restart-container">
      <RestartMessage>
      </RestartMessage>
      <RestartButton
        onClick={() => {
        }}
      >
        PLAY AGAIN
      </RestartButton>
    </RestartContainer>
  )
}

export default Restart