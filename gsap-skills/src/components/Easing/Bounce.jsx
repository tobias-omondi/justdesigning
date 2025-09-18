import React, { useEffect } from 'react'
import gsap from 'gsap'

const Bounce = () => {

  useEffect (() =>{
    gsap.fromTo(".circle",
      {x:10 },
      {x: 500, yoyo: true, skew: 10, duration: 2, repeat: 2, ease: "bounce.out"}
    )
    gsap.fromTo(".circletwo",
      {x:10 },
      {x: 500, yoyo: true, skew: 10, duration: 4, repeat: 2, ease: "bounce.inOut"}
    )
    gsap.fromTo(".circlethree",
      {x:10 },
      {x: 500, yoyo: true, skew: 10, duration: 2, repeat: 2, ease: "bounce.in"}
    )
    gsap.fromTo(".circlefour",
      {x:10 },
      {x: 500, yoyo: true, skew: 10, duration: 2, repeat: 2, ease: "circ.out"}
    )
    gsap.fromTo(".circlefive",
      {x:10 },
      {x: 500, yoyo: true, skew: 10, duration: 2, repeat: 2, ease: "circ.in"}
    )
    gsap.fromTo(".circlesix",
      {x:10 },
      {x: 500, yoyo: true, skew: 10, duration: 2, repeat: 2, ease: "circ.inOut"}
    )
  })
  return (
    <div>
      <h1 className='font-[clash] text-5xl font-extralight'>Bounce animation ease</h1>
      <div className='circle h-20 w-20 bg-yellow-500 rounded-full shadow-2xl'></div>
      <div className='circletwo h-20 w-20 bg-yellow-300 rounded-full shadow-2xl mt-5'></div>
      <div className='circlethree h-20 w-20 bg-yellow-700 rounded-full shadow-2xl mt-5'></div>

      {/* circ animation ease */}
      <h1 className='font-[clash] text-5xl font-extralight'>Circ animation ease</h1>
      <div className='circlefour h-20 w-20 bg-pink-500 rounded-full shadow-2xl mt-5'></div>
      <div className='circlefive h-20 w-20 bg-pink-700 rounded-full shadow-2xl mt-5'></div>
      <div className='circlesix h-20 w-20 bg-pink-900 rounded-full shadow-2xl mt-5'></div>
    </div>
  )
}

export default Bounce
