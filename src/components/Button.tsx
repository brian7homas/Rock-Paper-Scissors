import React from "react";
import gsap from 'gsap'
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
let tl = gsap.timeline({paused: true})
  const round = async (name:string) => {
    const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
    console.log(countOccurrences(gsap.utils.toArray(".btn")))
    tl.to(`.btn-container--${name}`, { transform: 'scale(1.7)', zIndex:4 })
    tl.play()
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