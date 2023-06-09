import React from "react";
import styled from "@emotion/styled";
import { css } from '@emotion/react'
import Button from './Button'
import Pentagon from '../svg/bg-pentagon.svg'
import Data from '../data/data'

const BoardContainer = styled.section`
  margin: 5em auto 0 auto;
  position:relative;
  display: grid;
`
const Board = () => {
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
            />
          )
        })
      }
      
    </BoardContainer>
  )  
}
export default Board
