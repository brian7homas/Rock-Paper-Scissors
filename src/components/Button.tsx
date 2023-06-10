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
const round = async (name:string) => {
  let buttons = gsap.utils.toArray(".btn")
  let animateOut:any = []
  
  // find matching class/element
  const findMatches = (arr:any, val:any) => arr.filter((item:any, i:number) => {
    
    // find elements to animate out
    if(item.classList[1] != `btn-container--${val}`){
      animateOut.push(item)
    }
    
    // matching class name sits in 2nd position of classList array/object
    return item.classList[1] === `btn-container--${val}`
  }).length;
  findMatches(buttons, name)
  StartRound(name, animateOut, props.color)
}
  return(
    <ButtonContainer className={`btn btn-container--${props.name}`}>
      <ButtonInlay 
        className={`btn-inlay--${props.name}`}
        onClick={async () => await round(props.name)}
        >
        {props.icon}
      </ButtonInlay>
    </ButtonContainer>
  )
}

export default Button