import React from "react"
import { gsap } from "gsap"
import Flip from "gsap/Flip";
gsap.registerPlugin(Flip)
const RestartAnimation = (name: string, color: string) => {
  let tl = gsap.timeline({ paused: true, duration: .85 })
  let button = document.querySelector(`.btn-container--${name}`)
  let state = Flip.getState([
    button,
    '.btn',
    '.restart-container',
    '.opponent-container',
    '.opponent-inlay',
    '.board-container',
    `.btn-container--${name}`
  ])

  button.classList.toggle('initial')
  tl
    //? RESTART CONTAINER
    .fromTo('.restart-container', { display: 'flex', opacity: 1, visibility: 'visible', top: '0' }, { top: '4em', display: 'none', opacity: 0, visibility: 'hidden' }, '<')


  Flip.from(state, {
    targets: '.btn',
    ease: 'power1.in',
    duration: 1
  })
  return tl
}
export default RestartAnimation 