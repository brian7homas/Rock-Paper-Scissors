import React from "react";
import { lazy, useState } from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import Button from './Button'
import Pentagon from '../svg/bg-pentagon.svg'
import Data from '../data/data'
const Opponent = lazy(() => import('../components/Opponent'))

  const [load, setLoad] = useState(false);

const BoardContainer = styled.section`
  margin: 8em auto 0 auto;
  position:relative;
  display: grid;
  transform: scale(.95);
  ${mqHeight[0]} {
    margin: -6em auto 0 auto;
  }
`
const Opponent = styled.div`
  background: white;
  border:none;
  border-radius: 50% 50%;
  height: 175px;
  width: 175px;
  position: absolute;
  z-index:0;
  display:flex;
  justify-content:center;
  align-items:center;
  left: 30px;
  display:none;
  opacity:0;
  visibility:0;
  z-index:4;
`
const Board = (props) => {
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
      {
        <Opponent/> || load
      }
    </BoardContainer>
  )  
}
export default Board
