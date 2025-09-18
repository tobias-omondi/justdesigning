import React, { useEffect } from 'react'
import gsap from 'gsap'

const Back = () => {

  useEffect (() =>{
    gsap.to (".retangle",
      {x: 600, duration: 2, ease: "back.in(1.75)", repeat: 2, yoyo: true}
    )
    gsap.to (".retangletwo",
      {x: 600, duration: 2, ease: "back.inOut(1.75)", repeat: 2, yoyo: true, skewY: 6}
    )
    gsap.to (".retanglethree",
      {x: 600, duration: 2, ease: "back.out(1.75)", repeat: 2, yoyo: true, skewX: 4}
    )
  })
  return (
    <div>
      <h1 className='font-[clash] mt-5 underline text-2xl'>Back animation</h1>
      <div className='retangle bg-blue-900 h-20 w-32 rounded shadow-2xl'></div>
      <div className='retangletwo bg-blue-950 h-20 w-32 rounded mt-3 shadow-2xl'></div>
      <div className='retanglethree bg-blue-700 h-20 w-32 rounded mt-3 shadow-2xl'></div>
    </div>
  )
}

export default Back
