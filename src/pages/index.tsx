import * as React from "react"
import { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Global, css } from '@emotion/react'
import styled from "@emotion/styled"
import Scoreboard from "../components/Scoreboard"
import Board from "../components/Board"
import Footer from "../components/Footer"

const MainContainer = styled.main`
  display:flex;
  flex-direction:column;
  background: rgb(31,55,86);
  background: radial-gradient(circle, rgba(31,55,86,1) 21%, rgba(29,47,80,1) 45%, rgba(20,21,57,1) 92%);
  height:100vh;
  justify-content:space-between;
  overflow-y: scroll;
`
const IndexPage: React.FC<PageProps> = () => {
  const [points, addPoints] = useState(0)
  return (
    <>
      <Global 
          styles={css`
          @font-face {
            font-family: 'Barlow Semi Condensed';
            src: url('https://fonts.google.com/specimen/Barlow+Semi+Condensed') format('truetype');
          }
          @font-face {
            font-family: 'Fjalla One';
            src: url('https://fonts.google.com/specimen/Fjalla+One') format('truetype');
          }
            * {
              box-sizing:border-box;
              margin:0;
              padding:0;
            }
            
          `}
        />
        <MainContainer>
          <Scoreboard
            points={points}
          />
          <Board 
            addPoints={addPoints}
          />
          <Footer/>
        </MainContainer>
    </>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>👊 📄 ✂ </title>
