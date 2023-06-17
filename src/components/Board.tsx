import React, { useContext } from "react";
import { lazy, useState } from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
// STATE
import { ScoreStateContext } from "./Layout";
// COMPONENETS
import Button from './Button'
import UseIsClient from "./UseIsClient";
// SVG
import Pentagon from '../svg/bg-pentagon.svg'
// DATA
import Data from '../data/data'
import Rules from '../data/rules'
// ANIMATION
import StartRound from "../animations/StartRound";
// LAZY
const Opponent = lazy(() => import('../components/Opponent'))
const Restart = lazy(() => import('../components/Restart'))

const Board = (props) => {
  //? VARIABLES
  const score = useContext(ScoreStateContext)
  const [components, setComponents] = useState(["Restart", "Opponent"]);
  let icon: React.JSX.Element, bg: string
  const breakpoints = [685]
  const mqHeight = breakpoints.map(bp => `@media screen and (min-height: ${bp}px)`)
  const { isClient, key } = UseIsClient()
  let houseData = useRef({ game: 0 })
  //! LOAD RESTART COMPONENT USED TO UPDATE SCROREBOARD AND OPPONENT DATA
  const loadRestart = async () => {
    setComponents([...components, "Restart", "Opponent", "ScoreBoard"])
  }
  //? FUNCTIONS
  const startRound = async (name: string, color: string) => {
    Rules(name, score)
    //? THROWS MINIFIED ERROR - SERVER AND CLIENT NOT MATCHING
    await loadRestart().then(async () => {
      //? START THE ANIMATION
      await StartRound(name, color, score).timeScale(1.2)
    })
  }
  /** 
    //! KEEPS CLIENT FROM UPDATING BEFORE SSR TAKES PLACE
    //! W/O isClient - REACT WILL THROW ERROR 418 IN PRODUCTION CODE
  */
  if( !isClient ) return null
    
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
  return (
    <>
      <Scoreboard
        key={key}
        points={houseData.game}
      />
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
            return (
              <Button
                key={i}
                color={item.color}
                shadow={item.shadow}
                icon={item.icon}
                position={item.position}
                name={item.name}
                houseBg={bg}
                houseIcon={icon}
                startRound={startRound}
              />
            )
          })
        }
        <Restart changeName={score} addPoints={props.addPoints} />
        <HouseLabel className="house-label">
          HOUSE PICKED
        </HouseLabel>
        {<Opponent
          bg={score.houseBg}
          icon={score.houseIcon}
        />}
      </BoardContainer>

    </>
  )
}
export default Board
