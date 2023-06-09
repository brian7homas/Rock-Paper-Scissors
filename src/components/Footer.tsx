import React from "react";
import styled from "@emotion/styled";
const FooterEl = styled.footer`
  margin: 0 auto;
  display:flex;
  justify-content:flex-end;
  width:100vw;
  padding: 0 3em;
`
const RulesButton = styled.button`
  font-size: 2rem;
  background:transparent;
  color:white;
  padding:.75em 3em;
  font-family: 'Barlow Semi Condensed';
  font-weight: 600;
  border-radius: 20px;
  
`
const Footer = () => {
  return(
    <FooterEl>
      <RulesButton>
        Rules
      </RulesButton>
    </FooterEl>
  )
}

export default Footer
