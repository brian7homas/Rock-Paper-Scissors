import gsap from 'gsap'
import Flip from "gsap/Flip";
gsap.registerPlugin(Flip)

let tl = gsap.timeline({paused: true})
const StartAnimation = (name:any, color:null, score:null) => {
  let buttons = gsap.utils.toArray(".btn")
  let state = Flip.getState(['.btn', '.restart-container'])
  let animateOut:any = []
  let boardContainerWidth = window.innerWidth
  let width, scale = 'scale(1.25)'
  
  if(boardContainerWidth > 709){
    width = '90%'
  }
  if(boardContainerWidth > 1020){
    width = '50vw'
  }
  if(boardContainerWidth == 1344){
    width = '62vw'
    scale = 'scale(2)'
  }
  if(boardContainerWidth <= 709){
    width = '100vw'
  }
  if(boardContainerWidth <= 375){
    width = '116vw'
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
  tl
    //? START - MAKE PLAYER ICON BG TRANSPARENT AND SCALED UP
    .to(`.btn-container--${name}`, { background: 'transparent' })
    //? MOVE OVERLAY OVER THE PLAYER ICON - KEEPS USER FROM REPLAYING THE ANIMATION FROM START
    .to(`.btn-overlay--${name}`, { zIndex: 2 }, '<')
    //? ANIMATE OUT PENTAGON AND OTHER NON-SELECTED ICONS
    .to([animateOut, '.pentagon'], { stagger: .2, duration: .15, opacity: 0, display: 'none' }, '<')
    //? Delay
    .to(`.board-container`, 2, {
      ease: 'custom',
      width: width
    }, '-=.5')

    //? SETS THE PLAYER ICON TO THE CENTER OF BOARD

    //? RECOLOR THE PLAYER ICON
    .from([`.btn-container--${name}`, '.opponent-container'], 1.2, { background: `${color}` }, '<=1.25')
    .set([`.btn-container--${name}`, '.opponent-container'], { transform: scale }, '<')

    //? DISPLAY THE OPPONENT SELECTION
    .to('.opponent-inlay', { display: 'flex', position: 'relative', visibility: 'visible', opacity: 1 }, '<')
    .to('.opponent-container', { display: 'flex', position: 'relative', visibility: 'visible', opacity: 1 }, '<')
    .to(`.icon-container`, { justifyContent: 'space-between', width: width }, '<')
    //? LABELS AND RULES BUTTON
    .fromTo(['.player-label', '.house-label'], { display: 'none', opacity: 0, visibility: 'hidden' }, {
      display: 'block', opacity: 1, visibility: 'visible',
      onComplete: () => {
        //? ANIMATES THE WINNER UNDERLAY
        let els: any = []
        if (score.game == 0) {
          els = gsap.utils.toArray('.house-underlay-1, .house-underlay-2, .house-underlay-3')
        }
        if (score.game == 1) {
          els = gsap.utils.toArray('.player-underlay-1, .player-underlay-2, .player-underlay-3')
        }
        gsap.fromTo(els, .75,
          {
            ease: 'back.in(2.7)',
            transform: 'scale(0)',
            opacity: 0,
            visibility: 'hidden',
            display: 'none'
          },
          {
            stagger: .099,
            ease: 'back.out(2.7)',
            transform: 'scale(1)',
            opacity: 1,
            visibility: 'visible',
            display: 'flex'
          })

      }
    }, '<')
    //? RESTART CONTAINER - DISPLAY THEN ANIMATE IN USING MARGIN
    .fromTo('.restart-container', { display: 'none', opacity: 0, visibility: 'hidden' }, {
      display: 'flex', opacity: 1, visibility: 'visible', justifySelf: 'center',
      onComplete: () => {
        Flip.killFlipsOf([buttons, '.restart-container'])
      }

    }, '-=.75')
      Flip.from(state, {
        ease:'power1.out',
        duration:1
      })
  return tl
}

export default StartAnimation