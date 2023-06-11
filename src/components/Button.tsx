import React from "react";
import gsap from 'gsap'
import styled from "@emotion/styled";
import { CustomEase } from "gsap/CustomEase";
import StartRound from "../animations/StartRoung";
gsap.registerPlugin(CustomEase);
CustomEase.create("custom", "M0,0 C1.196,0.016 0.282,0.334 1,1 ");

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
    cursor:pointer;
  `
  return(
    <ButtonContainer className={`btn btn-container--${props.name}`}>
      <ButtonInlay 
        className={`btn-inlay--${props.name}`}
        onClick={async () => {
          props.opponent
          return await props.startRound(props.name); 
          }}
        >
        {props.icon}
      </ButtonInlay>
    </ButtonContainer>
  )
}

export default Button