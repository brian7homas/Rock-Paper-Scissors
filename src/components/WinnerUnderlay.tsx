import React from "react";
import styled from "@emotion/styled";
const WinnerUnderlay = (props) =>{
  const WinnerUnderlay1 = styled.div`
    background:hsla(360, 100%, 100%, 0.08);
    border:none;
    border-radius: 50% 50%;
    height: 23em;
    width: 23em;
    position: absolute;
    z-index:-1;
    display:flex;
    justify-content: center;
    align-items:center;
    display:none;
    visibility: hidden;
    opacity:0;
  `
  const WinnerUnderlay2 = styled.div`
    background:hsla(360, 100%, 100%, 0.05);
    border:none;
    border-radius: 50% 50%;
    height: 29em;
    width: 29em;
    position: absolute;
    z-index:-1;
    display:flex;
    justify-content: center;
    align-items:center;
    display:none;
    visibility: hidden;
    opacity:0;
  `
  const WinnerUnderlay3 = styled.div`
    background:hsla(360, 100%, 100%, 0.03);
    border:none;
    border-radius: 50% 50%;
    height: 35em;
    width: 35em;
    position: absolute;
    z-index:-1;
    display:flex;
    justify-content: center;
    align-items:center;
    display:none;
    visibility: hidden;
    opacity:0;
  `
  return(
    <>
    <WinnerUnderlay3 className={`${props.player}-underlay-3 underlay`}/>
    <WinnerUnderlay2 className={`${props.player}-underlay-2 underlay`}/>
    <WinnerUnderlay1 className={`${props.player}-underlay-1 underlay`}/>
    </>
  )
}
export default WinnerUnderlay