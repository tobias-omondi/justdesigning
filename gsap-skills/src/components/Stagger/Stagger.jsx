import React, { useEffect } from 'react'
import gsap from 'gsap'

const Stagger = () => {

  useEffect(() => {
    gsap.to(".box", 
      {x:600,
      duration: 2,
      repeat: 2,
      yoyo: true,
      stagger: 0.2,
      ease: "Power2.easeIn"
      }
    )
  }, []
  ) 
  return (
    <div>
      <h1  className='font-[clash] mt-5 underline text-2xl'>Learning Stagger Gsap</h1>
      <div className='box bg-amber-500 w-32 h-32 rounded shadow-md'></div>
      <div className='box bg-blue-500 w-32 h-32 rounded shadow-md'></div>
      <div className='box bg-red-500 w-32 h-32 rounded shadow-md'></div>
      <div className='box bg-yellow-500 w-32 h-32 rounded shadow-md'></div>
    </div>
  )
}

export default Stagger
