import * as React from "react"
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
`
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Global 
          styles={css`
            * {
              box-sizing:border-box;
              margin:0;
              padding:0;
              color: white;
            }
          `}
        />
        <MainContainer>
          <Scoreboard/>
          <Board/>
          <Footer/>
        </MainContainer>
    </>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>👊 📄 ✂ </title>
