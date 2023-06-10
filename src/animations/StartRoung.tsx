import gsap from 'gsap'

let tl = gsap.timeline({paused: true})
const StartRound = (name:any, animateOut:any, color:any) => {
  tl
    .to(`.btn-container--${name}`, { transform: 'scale(1.5)', zIndex:4 })
    .to([animateOut, '.pentagon'], { stagger: .2, duration: .15, opacity:0, display:'none' }, '<')
    .to(`.board-container`, 2,{ ease: 'custom',  width: '50vw', display:'flex', justifyContent: 'space-between' }, '+=.5')
    .to(`.btn-container--${name}`, { position: 'initial'}, '<')
    .fromTo(`.btn-container--${name}`, {background:'transparent'}, {ease:"slow(0.7, 0.7, false)", background:`${color}`}, '<=1.25')
    .to('.opponent', { display: 'block', position: 'relative', visibility: 'visible', opacity: 1}, '<')
  return tl.play()
}

export default StartRound