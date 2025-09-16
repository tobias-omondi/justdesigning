import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Demo = () => {

  useEffect (() =>{
    gsap.to (".box", 
      {x: 300 , duration: 2, repeat: 2, yoyo: true, scaleY: 0.8 , rotation: "1.90rad", skewY: 30, skewX: 30
     });

    gsap.to (".circle", 
      {x: 300, duration: 2, rotation: 360, repeat: 2 , yoyo: true , }
    )
    gsap.fromTo (".circleshape",
      {x: 40 , delay : 1.2, autoAlpha: 0 , backgroundColor: 'red'},
      {x: 150, rotate: 360, skewY: 10 ,duration: 3 , repeat: 2 , yoyo: true ,transformOrigin: "center 40%", autoAlpha: 1, backgroundColor: '#9d95ff', 
        attr: {
          rx: 50,
        }
       }
    )
  })
  return (
    <div>
      <h1 className='font-[clash] text-5xl font-extralight'>light</h1>

      {/* box animation */}
     <div className="box w-20 h-20 bg-blue-500 mt-5 rounded shadow-xl"></div>

     {/* circle animation */}

     <div className='circle w-20 h-20 bg-amber-400 mt-5 rounded-full shadow-xl'></div>

     <div className='circleshape w-20 h-20 bg-red-500 mt-5 rounded-full shadow-2xl'></div>
    </div>
  )
}

export default Demo
