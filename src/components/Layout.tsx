import React, { useState, createContext } from "react"
import styled from "@emotion/styled"
export const ScoreStateContext = createContext({})
const Layout = ({ children }) => {
  const [score, setScore] = useState(
    {
      player: '',
      playerBg:'',
      playerPoints:0,
      playerIcon: '',
      house: '',
      houseIcon: '',
      houseBg: '',
      game:'',
      message:''
    }
  )
  const MainContainer = styled.main`
  display:flex;
  flex-direction:column;
  background: rgb(31,55,86);
  background: radial-gradient(circle, rgba(31,55,86,1) 21%, rgba(29,47,80,1) 45%, rgba(20,21,57,1) 92%);
  height:100vh;
  min-height:100vh;
  justify-content:space-between;
  overflow-y: scroll;
  overflow-x: hidden;
  `
  return (
    <ScoreStateContext.Provider value={score}>
      <MainContainer>{children}</MainContainer>
    </ScoreStateContext.Provider>
  )
}
export default Layout