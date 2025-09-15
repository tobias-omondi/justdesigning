import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Demo = () => {

  useEffect (() =>{
    gsap.to (".box", 
      {x: 300 , duration: 1.2, rotate: 360,
     });

    gsap.to (".circle", 
      {x: 300, duration: 2, rotate: 360 ,}
    )
  })
  return (
    <div>
      <h1 className='font-[clash] text-5xl font-extralight'>light</h1>

      {/* box animation */}
     <div className="box w-20 h-20 bg-blue-500 mt-5 rounded shadow-xl"></div>

     {/* circle animation */}

     <div className='circle w-20 h-20 bg-amber-400 mt-5 rounded-full shadow-xl'></div>
    </div>
  )
}

export default Demo
