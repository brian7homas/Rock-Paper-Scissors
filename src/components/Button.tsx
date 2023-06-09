import React from "react";
import styled from "@emotion/styled";

const Button = (props:any) => {
  const ButtonContainer = styled.div`
  background: ${props.color};
  border:none;
  border-radius: 50% 50%;
  height: 175px;
  width: 175px;
  position: absolute;
  z-index:0;
  display:flex;
  justify-content:center;
  align-items:center;
  ${props.position};
`
const ButtonInlay = styled.div`
  background:white;
  border:none;
  border-radius: 50% 50%;
  height: 145px;
  width: 145px;
  position: absolute;
  z-index:1;
  box-shadow: ${props.shadow};
  display:flex;
  justify-content: center;
  align-items:center;
`
  return(
    <ButtonContainer>
      <ButtonInlay>
        {props.icon}
      </ButtonInlay>
    </ButtonContainer>
  )
}

export default Button