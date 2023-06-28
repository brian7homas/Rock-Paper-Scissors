import gsap from 'gsap'

const PlayOverlay = () => {
  gsap.to(
    ['.rules-overlay', '.rules-container', '.rules-title']
    ,
    {
      ease: 'power3.out',
      display: 'grid',
      opacity: 1,
      visibility: 'visible',
      stagger:.12
    }
  )
  gsap.to(
    '.rules'
    ,
    {
      ease: 'power3.out',
      transform: 'scale(1)',
    }

  )

}
const ReverseOverlay = () => {
  gsap.to(
    '.rules'
    ,
    {
      duration: .45,
      ease: 'power3.out',
      transform: 'scale(0)',
    }
  )
  gsap.to(
    ['.rules-overlay', '.rules-container', '.rules-title']
    ,
    {
      stagger: .12, 
      ease: 'power3.out',
      display: 'none',
      opacity: 0,
      visibility: 'hidden',
    }
    
  )
}
export { PlayOverlay, ReverseOverlay }