import gsap from 'gsap'

let tl = gsap.timeline({paused: true})
const StartAnimation = (name:any, color:null) => {
  let buttons = gsap.utils.toArray(".btn")
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
    if(item.classList[1] != `btn-container--${val}`) animateOut.push(item)
    item.classList[1] === `btn-container--${val}`
    return animateOut
  })
  
  filterPick(buttons,name)
  
  tl
  .to(`.btn-container--${name}`, { transform: 'scale(1.5)',background: 'transparent' })
  .to(`.btn-overlay--${name}`, { zIndex:2 })
  .to([animateOut, '.pentagon'], { stagger: .2, duration: .15, opacity:0, display:'none' }, '<')
  // Delay
  .to(`.board-container`, 2,{ 
                            marginTop: '0', 
                            height: '10vh', 
                            ease: 'custom', 
                            width: width,  
                            display:'flex', 
                            justifyContent: 'space-between', 
                            alignItems:'center',
                            flexDirection:'column' }, '+=.5')
  // PLACES PLAYER SELECTION IN MIDDLE OF SCREEN
  .to(`.btn-container--${name}`, { position: 'initial'}, '<')
  // CURRENT
  .from([`.btn-container--${name}`, '.opponent-container'], 1.2, {  background:`${color}`}, '<=1.25')
  .to('.opponent-inlay', { display: 'flex', position: 'relative', visibility: 'visible', opacity: 1}, '<')
  .to('.opponent-container', { transform: 'scale(1.5)', display: 'flex', position: 'relative', visibility: 'visible', opacity: 1 }, '<')
  .fromTo(['.player-label','.house-label'], { display: 'none', opacity:0, visibility:'hidden' }, { display: 'block',opacity:1, visibility:'visible' })
  .fromTo('.restart-container', { display: 'none', opacity: 0, visibility: 'hidden', autoAlpha:0 }, { autoAplha:1, display: 'flex', opacity: 1, visibility: 'visible' }, '<')
tl.play()
  return tl
}

export default StartAnimation