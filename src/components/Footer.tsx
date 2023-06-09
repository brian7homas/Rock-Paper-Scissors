import React from "react";
import styled from "@emotion/styled";
const FooterEl = styled.footer`
  margin:0 auto 2em auto;
  display:flex;
  justify-content:flex-end;
  width:100vw;
  padding: 0 3em;
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
    </FooterEl>
  )
}

export default Footer
