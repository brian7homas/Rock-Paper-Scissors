import React from "react";
import { lazy, useState } from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
// COMPONENETS
import Button from './Button'
import Restart from "./Restart";
// SVG
import Pentagon from '../svg/bg-pentagon.svg'
// DATA
import Data from '../data/data'
import Rules from '../data/rules'
// ANIMATION
import StartRound from "../animations/StartRound";
// LAZY
const Opponent = lazy(() => import('../components/Opponent'))

const Board = (props) => {
  const [load, setLoad] = useState(false);
  let changeName = {
    player:'',
    house:''
  }
  let icon: React.JSX.Element, bg: string, name:any
  const OpponentData = () => {
    const randIndex = Math.floor(Math.random() * Data.length)
    name = Data[randIndex].name
    icon = Data[randIndex].icon
    bg = Data[randIndex].color
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
  // STYLES
  const breakpoints = [685]
  const mqHeight = breakpoints.map(bp => `@media screen and (min-height: ${bp}px)`)
  const BoardContainer = styled.section`
  margin: 8em auto 0 auto;
  position:relative;
  display: grid;
  transform: scale(.95);
  ${mqHeight[0]} {
    margin: -6em auto 0 auto;
  }
`
  const PlayerLabel = styled.p`
  display:none;
  position:absolute;
  z-index:5;
  font-family: 'Barlow Semi Condensed';
  color: white;
  top: -4em;
  left: .5em;
  font-size: 2em;
  font-weight: 700;
  `
  const HouseLabel = styled.p`
  display:none;
  position:absolute;
  z-index:5;
  font-family: 'Barlow Semi Condensed';
  color: white;
  top: -4em;
  right: -1em;
  font-size: 2em;
  `
  // GET OPPONENT DATA
  OpponentData()
  return(
    <BoardContainer className="board-container">
      <Pentagon 
        className='pentagon'
        css={css`
            position:absolute;
            z-index:0;
            place-self: center;
            `}
      />
      <PlayerLabel className="player-label">
        YOU PICKED
      </PlayerLabel>
      {
        Data.map((item, i) => {
          return(
            <Button
              key={i}
              color={item.color}
              shadow={item.shadow}
              icon={item.icon}
              position={item.position}
              name={item.name}
              addPoints={props.addPoints}
              opponent={Opponent}
              houseBg={bg}
              houseIcon={icon}
              housePick={name}
              startRound={startRound}
            />
          )
        })
      }
      <HouseLabel className="house-label">
        HOUSE PICKED
      </HouseLabel>
      {
        <Opponent
          bg={bg}
          icon={icon}
        /> || load
      }
    </BoardContainer>
  )  
}
export default Board
