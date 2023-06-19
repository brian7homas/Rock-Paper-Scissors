import React, { useContext } from "react";
import { lazy, useState, useRef } from "react";
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
import StartRound from "../animations/StartAnimation";
import Scoreboard from "./Scoreboard";
// LAZY
const Opponent = lazy(() => import('../components/Opponent'))
const Restart = lazy(() => import('../components/Restart'))

const Board = () => {
  //? VARIABLES
  const score = useContext(ScoreStateContext)
  const [components, setComponents] = useState(["Restart", "Opponent"]);
  let icon: React.JSX.Element, bg: string
  const breakpoints = [490, 560, 685, 1024]
  const mobileBP = [375]
  //? MEDIA QUERIES
  const mqHeight = breakpoints.map(bp => `@media screen and (min-height: ${bp}px)`)
  const mqWidth = breakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)
  const mqWidthLandscape = breakpoints.map(bp => `@media screen and (max-width: ${bp}px) and (orientation: landscape)`)
  const mqWidthPortrait = mobileBP.map(bp => `@media screen and (max-width: ${bp}px) and (orientation: portrait)`)
  const { isClient, key } = UseIsClient()
  let houseData = useRef({ game: 0 })
  //! LOAD RESTART COMPONENT USED TO UPDATE SCROREBOARD AND OPPONENT DATA
  const loadRestart = async () => {
    setComponents([...components, "ScoreBoard"])
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
    
  //? STYLES
  const BoardContainer = styled.section`
  margin: 8em auto 0 auto;
  position:relative;
  display: grid;
  transform: scale(.95);
  max-width: 65vw;
  ${mqHeight[2]} {
    margin: -6em auto 0 auto;
  }
  ${mqWidth[1]} {
    transform: scale(.8);
  }
  ${mqWidth[0]} {
    transform: scale(.76);
    max-width: 100vw;
  }
  ${mqWidthLandscape[3]}{
    margin-top: 17em;
  }
`
  const PlayerLabel = styled.p`
  display:none;
  position:absolute;
  opacity:0;
  visibiltiy:hidden;
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
  opacity:0;
  visibiltiy:hidden;
  position:absolute;
  z-index:5;
  font-family: 'Barlow Semi Condensed';
  color: white;
  top: -4em;
  right: -1em;
  font-size: 2em;
  `
  const IconContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width:110%;
    ${mqWidth[2]} {
      width: 140%;
      transform: scale(.8);
    }
    ${mqWidthPortrait[0]}{
      transform: scale(.7);
    }
  `
  return (
    <>
      {
        components.map((item, i) => (
          i < 1 ? <Scoreboard key={key+ '-' + i} points={houseData.game} /> : ''
        ))
      }
      <BoardContainer className="board-container">
        <Pentagon
          className='pentagon'
          css={css`
            position:absolute;
            z-index:0;
            place-self: center;
            ${mqWidthPortrait[0]}{
              transform: scale(.7);
            }
            `}
        />
        
        <IconContainer>

            <PlayerLabel className="player-label">
              YOU PICKED
            </PlayerLabel>
            {
            Data.map((item, i) => (
              <Button
                key={i}
                color={item.color}
                shadow={item.shadow}
                icon={item.icon}
                position={item.position}
                name={item.name}
                houseBg={bg}
                houseIcon={icon}
                startRound={startRound} />
            ))
          }

          <div>
            <HouseLabel className="house-label">
              HOUSE PICKED
            </HouseLabel>
            {<Opponent
              bg={score.houseBg}
              icon={score.houseIcon}
            />}
          </div>
          
        </IconContainer>
        {RestartComponent()}
      </BoardContainer>

    </>
  )
  function RestartComponent() {
    return <Restart changeName={score} />;
  }
}
export default Board
