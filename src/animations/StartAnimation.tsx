import gsap from 'gsap'
import Flip from "gsap/Flip";
gsap.registerPlugin(Flip)

let tl = gsap.timeline({paused: true})
const StartAnimation = (name:any, color:null, score:null) => {
  let buttons = gsap.utils.toArray(".btn")
  let state = Flip.getState(['.btn', '.restart-container'])
  let animateOut:any = []
  let boardContainerWidth = window.screen.width
  let width
  
  if(boardContainerWidth > 709){
    width = '90%'
  }
  if(boardContainerWidth > 1020){
    width = '50vw'
  }
  if(boardContainerWidth <= 709){
    width = '100vw'
  }
  const filterPick = async (arr:any, val:any) => arr.filter((item:any) => {
    if(item.classList[1] === `btn-container--${val}`) {
      item.classList.toggle('initial')
    }
    if(item.classList[1] != `btn-container--${val}`) {
      item.classList.toggle('hidden')
      animateOut.push(item)
    }
    return animateOut
  })
  filterPick(buttons,name)
      Flip.from(state, {
        ease:'power1.out',
        duration:1
      })
  return tl
}

export default StartAnimation