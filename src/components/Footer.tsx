import React from "react";
import styled from "@emotion/styled";
const breakpoints = [685]

const mqHeight = breakpoints.map(bp => `@media screen and (max-height: ${bp}px)`)
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
`
const Footer = () => {
  return(
    <FooterEl>
      <RulesButton>
        RULES
      </RulesButton>
          <RulesCloseButton onClick={() => RulesAnimation()}>X</RulesCloseButton>
    </FooterEl>
  )
}

export default Footer
