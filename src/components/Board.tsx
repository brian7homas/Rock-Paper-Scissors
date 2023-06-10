import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import Button from './Button'
import Pentagon from '../svg/bg-pentagon.svg'
import Data from '../data/data'

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
const Board = (props) => {
  return(
    <BoardContainer>
      <Pentagon 
        css={css`
            position:absolute;
            z-index:0;
            place-self: center;
            `}
      />
      {
        Data.map((item) => {
          return(
            <Button
              color={item.color}
              shadow={item.shadow}
              icon={item.icon}
              position={item.position}
              addPoints={props.addPoints}
            />
          )
        })
      }
      
    </BoardContainer>
  )  
}
export default Board
