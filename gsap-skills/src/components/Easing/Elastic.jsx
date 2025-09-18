import React, { useEffect } from 'react'
import gsap from 'gsap'

const Elastic = () => {
  useEffect (() => {
    gsap.to(".rectangle",
      {x: 600, duration: 2, yoyo: true , repeat: 2, skewX: 10, ease: "elastic.in(1, 0.3)"}
    )
    gsap.to(".rectangleone",
      {x: 600, duration: 2, yoyo: true , repeat: 2, skewX: 10, ease: "elastic.inOut"}
    )
    gsap.to(".rectangletwo",
      {x: 600, duration: 2, yoyo: true , repeat: 2, skewX: 10, ease: "elastic.out"}
    )
  })
  return (
    <div>
      <h1>Elastic Easing</h1>
      <div className='rectangle bg-black w-32 h-20 rounded-xl'></div>
      <div className='rectangleone bg-blue-500 w-32 h-20 rounded-xl mt-5'></div>
      <div className='rectangletwo bg-red-500 w-32 h-20 rounded-xl mt-5'></div>
    </div>
  )
}

export default Elastic
