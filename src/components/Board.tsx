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
import StartAnimation from "../animations/StartAnimation";
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
  const mobileBP = [475]
  const labelBP = [950, 685, 490, 375, 320]
  //? MEDIA QUERIES
  const mqWidth = breakpoints.map(bp => `@media screen and (max-width: ${bp}px)`)
  const mqWidthPortrait = mobileBP.map(bp => `@media screen and (max-width: ${bp}px) and (orientation: portrait)`)
  const labelMq = labelBP.map(bp => `@media screen and (max-width: ${bp}px)`)
  const { isClient, key } = UseIsClient()
  let houseData = useRef({ game: 0 })
  //! LOAD RESTART COMPONENT USED TO UPDATE SCROREBOARD AND OPPONENT DATA
  const loadRestart = async () => {
    setComponents([...components, "ScoreBoard"])
  }
  //? FUNCTIONS
  const startRound = async (name: string, color: string): Promise<void> => {
    Rules(name, score)
    await loadRestart().then(async () => {
      //? START THE ANIMATION
      await StartAnimation(name, color, score).timeScale(1.2)
    })
  }
  //? STYLES
  const BoardContainer = styled.section`
  margin: 8em auto 0 auto;
  position:relative;
  display: grid;
  transform: scale(.95);
  max-width: 65vw;
  min-height:auto;
  justify-content:center;
`
  const PlayerLabel = styled.p`
  display:none;
  opacity:0;
  visibiltiy:hidden;
  z-index:5;
  font-family: 'Barlow Semi Condensed';
  color: white;
  top: -4em;
  left: -1em;
  font-size: 3em;
  font-weight: 700;
  ${labelMq[0]} {
    right: -1.5em;
  }
  ${labelMq[1]} {
    right: -1em;
  }
  ${labelMq[2]} {
    padding-top: 2em;
  }
  ${labelMq[3]} {
    position:relative;
    top:2em;
    font-size:2.5em;
    padding:0;
    align-self: flex-end;
    letter-spacing: .099em;
    left:-.3em;
  }
  `
  const HouseLabel = styled.p`
  display:none;
  opacity:0;
  visibiltiy:hidden;
  z-index:5;
  font-family: 'Barlow Semi Condensed';
  color: white;
  top: -4em;
  right: -2.5em;
  font-size: 3em;
  font-weight: 700;
  ${labelMq[0]} {
    right: -1.5em;
  }
  ${labelMq[1]} {
    right: -1em;
  }
  ${labelMq[2]} {
    padding-top: 2em;
  }
  ${labelMq[3]} {
    position:relative;
    top:2em;
    font-size:2.5em;
    padding:0;
    align-self: flex-end;
    letter-spacing: .099em;
    left:1.5em;
  }
  `
  const IconContainer = styled.div`
    display:flex;
    position: relative;
    ${mqWidth[2]} {
      transform: scale(.8);
    }
    ${mqWidthPortrait[0]}{
      transform: scale(.7);
    }
  `
  const PlayerContainer = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    ${mqWidth[2]}{
      flex-direction: column-reverse;
    }
  `
  /** 
    //! KEEPS CLIENT FROM UPDATING BEFORE SSR TAKES PLACE
    //! W/O isClient - REACT WILL THROW ERROR 418 IN PRODUCTION CODE
  */
  if (!isClient) return false
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
            margin-left: 2.5em;
            ${mqWidthPortrait[0]}{
              transform: scale(.7);
            }
            `}
        />
        
        <IconContainer>
          <PlayerContainer>
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
          </PlayerContainer>

          <PlayerContainer>
            <HouseLabel className="house-label">
              THE HOUSE PICKED
            </HouseLabel>
            {<Opponent
              bg={score.houseBg}
              icon={score.houseIcon}
            />}
          </PlayerContainer>
          
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
