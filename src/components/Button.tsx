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
  let changeName = {
    player:'',
    house:''
  }

  const startRound = async (name:string) => {
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
    StartRound(name, animateOut, props.color, changeName).then(() => {
      Rules(changeName.player, props.housePick)
    })
  }
  const Rules = (player:string, house:string) => {
    switch(player){
      case 'scissors':
        if(house == 'spock') console.log('house: spock - HOUSE WINS')
        if(house == 'lizard') console.log('house: lizard - YOU WIN')
        if(house == 'rock') console.log('house: rock - HOUSE WINS')
        if(house == 'paper') console.log('house: paper - YOU WIN')
        if(house == 'scissors') console.log('house: scissors - DRAW')
        break
      case 'paper':
        if(house == 'spock') console.log('house: spock - YOU WIN')
        if(house == 'lizard') console.log('house: lizard - HOUSE WINS')
        if(house == 'rock') console.log('house: rock - YOU WIN')
        if(house == 'paper') console.log('house: paper - DRAW')
        if(house == 'scissors') console.log('house: scissors - HOUSE WINS')
        break
      case 'rock':
        if(house == 'spock') console.log('house: spock - HOUSE WINS')
        if(house == 'lizard') console.log('house: lizard - YOU WIN')
        if(house == 'rock') console.log('house: rock - DRAW')
        if(house == 'paper') console.log('house: paper - HOUSE WINS')
        if(house == 'scissors') console.log('house: scissors - YOU WIN')
        break
      case 'lizard':
        if(house == 'spock') console.log('house: spock - YOU WIN')
        if(house == 'lizard') console.log('house: lizard - DRAW')
        if(house == 'rock') console.log('house: rock - HOUSE WINS')
        if(house == 'paper') console.log('house: paper - YOU WIN')
        if(house == 'scissors') console.log('house: scissors - HOUSE WINS')
        break
      case 'spock':
        if(house == 'spock') console.log('house: spock - DRAW')
        if(house == 'lizard') console.log('house: lizard - HOUSE WINS')
        if(house == 'rock') console.log('house: rock - YOU WIN')
        if(house == 'paper') console.log('house: paper - HOUSE WINS')
        if(house == 'scissors') console.log('house: scissors - YOU WIN')
        break
    }
  }
  return(
    <ButtonContainer className={`btn btn-container--${props.name}`}>
      <ButtonInlay 
        className={`btn-inlay--${props.name}`}
        onClick={async () => {
          props.opponent
          return await startRound(props.name); 
          }}
        >
        {props.icon}
      </ButtonInlay>
    </ButtonContainer>
  )
}

export default Button