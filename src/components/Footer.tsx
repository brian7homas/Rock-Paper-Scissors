import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import { PlayOverlay, ReverseOverlay }from "../animations/RulesOverlay";
import Rules from '../svg/image-rules-bonus.svg'
const breakpoints = [685, 475, 414, 375, 320]

const mqHeight = breakpoints.map(bp => `@media screen and (max-height: ${bp}px)`)
const mq = breakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)
const FooterEl = styled.footer`
  display:flex;
  justify-content:flex-end;
  width:100%;
  padding: 0 1em;
  ${mqHeight[0]} {
    margin:0 auto 2em auto;
  }
  ${mq[0]} {
    margin:0 auto 0 auto;
    justify-content: center;
    margin-bottom:3em;
  }
  ${mq[4]} {
    
  }
`
const RulesButton = styled.button`
  font-size: 2rem;
  background:transparent;
  color:white;
  padding:.45em 1.5em;
  font-family: 'Barlow Semi Condensed';
  font-weight: 600;
  border-radius: 10px;
  letter-spacing: .09em;
  z-index:0;
  cursor:pointer;
`
const RulesOverlay = styled.div`
  background: hsla(0, 0%, 2%, 0.68);
  height:100vh;
  width:100vw;
  position:absolute;
  top:0;
  left:0;
  place-items:center;
  display:none;
  visibility: hidden;
  opacity:0;
`
const RulesCloseButton = styled.span`
  position: absolute;
  top: 0;
  margin: 1em 1em 0 0;
  right: 0;
  font-size: 4em;
  font-family: 'Barlow Semi Condensed';
  color: #b5b8c8;
  cursor:pointer;
  z-index:8;
  ${mq[1]} {
    margin:0;
    top: initial;
    right: 47%;
    bottom: 1.3em;
  }
`
const RulesContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background: white;
  height: 65vh;
  width: 75vw;
  // display:flex;
  justify-content: center;
  align-items: center;
  max-width:38.0rem;
  max-height: 56.0rem;
  display:none;
  visibility: hidden;
  opacity:0;
  
  ${mq[1]} {
    max-width:none;
    max-height: none;
    height: 100vh;
    width: 100vw;
    
  }
`
const RulesTitle = styled.p`
  font-family: 'Barlow Semi Condensed';
  margin:1em 0 0 .9em;
  position:absolute;
  top:0;
  left:0;
  font-size: 3.5em;
  font-family: 'Fjalla One';
  font-weight: 800;
  display:none;
  visibility: hidden;
  opacity:0;
  
  ${mq[1]} {
    left:4.2em;
    margin: 1em 0;
    top:1.6em;
  }
`

const Footer = () => {
  return(
    <FooterEl className="footer">
      <RulesButton className="rules-button--board" onClick={() => PlayOverlay()}>
        RULES
      </RulesButton>
      <RulesOverlay className="rules-overlay">
        <RulesContainer className="rules-container">
          <RulesTitle className="rules-title">RULES</RulesTitle>
          <RulesCloseButton className="rules-button" onClick={() => ReverseOverlay()}>X</RulesCloseButton>
          <Rules className="rules" css={css`
              transform: scale(0);
              ${mq[1]} {
                transform: scale(.8);
              }
            `}/>
        </RulesContainer>
      </RulesOverlay>
    </FooterEl>
  )
}

export default Footer
