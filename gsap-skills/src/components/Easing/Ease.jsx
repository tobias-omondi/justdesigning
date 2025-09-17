import React, { useEffect } from 'react'
import {gsap} from 'gsap'


const Ease = () => {

  useEffect (() =>{
    gsap.to (".squire", 
      {x: 500, rotation: 360 , ease: "power1.out", duration: 3})
    gsap.to (".squireone",
      {x:500, rotation: 360 , ease: "power1.in", duration : 3}
     )
     gsap.to (".squiretwo",
      {x:500, rotation: 360 , ease: "power1.inOut", duration : 3}
     )
     gsap.to (".squirethree",
      {x:500, rotation: 360 , ease: "power2.Out", duration : 3}
     )
     gsap.to (".squirefour",
      {x:500, rotation: 360 , ease: "power3.out", duration : 3}
     )
     gsap.to (".squirefive",
      {x:500, rotation: 360 , ease: "power4.out", duration : 3}
     )
  }, [])

  return (
    <div>
      <h1 className='font-[clash] mt-5 underline text-2xl'>LEARNING EASING DATE 17</h1>
      <div className='squire bg-yellow-500 w-20 h-20 rounded-xl mt-5'></div>
      <div className='squireone bg-blue-500 w-20 h-20 rounded-xl mt-5'></div>
      <div className='squiretwo bg-red-500 w-20 h-20 rounded-xl mt-5'></div>
      <div className='squirethree bg-gray-500 w-20 h-20 rounded-xl mt-5'></div>
      <div className='squirefour bg-green-500 w-20 h-20 rounded-xl mt-5'></div>
      <div className='squirefive bg-purple-500 w-20 h-20 rounded-xl mt-5'></div>
    </div>
  )
}

export default Ease
