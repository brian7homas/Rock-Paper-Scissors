import gsap from 'gsap'

const tl = gsap.timeline({paused: true, reversed:true})


const RulesOverlay = () => {
  tl.
    fromTo(['.rules-overlay', '.rules-title'], {ease:'linear', transform:'scale(2)', display:'none', opacity:0, visibility:'hidden'}, {duration: .85, ease:'power3.in', display:'grid', opacity:1, visibility:'visible', transform:'scale(1)'})
  if(tl.reversed()){
    return tl.play()
  }else{
    tl.reverse().then(() => {
      tl.clear()
    })
    
  }
}
export default RulesOverlay