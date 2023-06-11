import React from "react";
import { lazy, useState } from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import Button from './Button'
import Pentagon from '../svg/bg-pentagon.svg'
import Data from '../data/data'
const Opponent = lazy(() => import('../components/Opponent'))

const Board = (props) => {
  const [load, setLoad] = useState(false);
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
            />
          )
        })
      }
      <HouseLabel className="house-label">
        THE HOUSE PICKED
      </HouseLabel>
      {
        <Opponent/> || load
      }
    </BoardContainer>
  )  
}
export default Board
