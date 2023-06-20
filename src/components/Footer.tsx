import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import RulesAnimation from "../animations/RulesOverlay";
import Rules from '../svg/image-rules-bonus.svg'
const breakpoints = [685, 475]

const mqHeight = breakpoints.map(bp => `@media screen and (max-height: ${bp}px)`)
const mq = breakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)
const FooterEl = styled.footer`
  margin: 0 auto 2em auto;
  display:flex;
  justify-content:flex-end;
  width:100%;
  padding: 0 3em;
  ${mqHeight[0]} {
    margin:16em auto 2em auto;
  }
`
const RulesButton = styled.button`
  font-size: 1.4rem;
  background:transparent;
  color:white;
  padding:.45em 1.5em;
  font-family: 'Barlow Semi Condensed';
  font-weight: 600;
  border-radius: 10px;
  letter-spacing: .09em;
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
  ${mq[1]} {
    top: initial;
    right: 39%;
    bottom: 4em;
  }
`
const RulesContainer = styled.div`
  position: relative;
  border-radius: 5px;
  background: white;
  height: 65vh;
  width: 75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width:38.0rem;
  max-height: 56.0rem;
  ${mq[1]} {
    max-width:none;
    max-height: none;
    height: 100vh;
    width: 100vw;
    
  }
`
const RulesTitle = styled.p`
  font-family: 'Barlow Semi Condensed';
  margin:1em 0 0 .5em;
  position:absolute;
  top:0;
  left:0;
  font-size: 3.5em;
  font-family: 'Fjalla One';
  font-weight: 800;
  ${mq[1]} {
    left:initial;
    margin: 1em 0;
    top:3em;
  }
`
const Footer = () => {
  return(
    <FooterEl>
      <RulesButton>
        RULES
      </RulesButton>
      <RulesOverlay className="rules-overlay">
        <RulesContainer>
          <RulesTitle className="rules-title">RULES</RulesTitle>
          <RulesCloseButton onClick={() => RulesAnimation()}>X</RulesCloseButton>
          <Rules className="rules" css={css`
              position: absolute;
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
