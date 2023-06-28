import React from "react"
import { gsap } from "gsap"
import Flip from "gsap/Flip";
gsap.registerPlugin(Flip)

const RestartAnimation = (name: string, color: string) => {
  let tl = gsap.timeline({ paused: true, duration: .85 })
  let button = document.querySelector(`.btn-container--${name}`)
  let opponentContainer = document.querySelector(`.opponent-container`)
  let restartContainer = document.querySelector(`.restart-container`)
  let opponentInlay = document.querySelector(`.opponent-inlay`)
  let hidden = gsap.utils.toArray('.hidden')
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
  opponentContainer.classList.toggle('initial')
  opponentInlay.classList.toggle('absolute')
  restartContainer.classList.toggle('absolute')
  gsap.set([`.btn-container--${name}`, '.opponent-container'], { transform: 'scale(1)' })
  gsap.set('.underlay', { display: 'none', visibility: 'hidden', opacity: 0, transform: 'scale(0)' })
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