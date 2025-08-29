import React from 'react'
import {motion} from 'framer-motion'

const Existanimation = () => {
  return (
    <div>
      <motion.div className='text-white/45 backdrop-blur-lg mt-10'>
        <motion.h1
        initial= {{opacity: 0, y: -10, scale: 2.0 , filter:" blur(5px)"}}
        animate = {{opacity: 1, y: 0, scale: 1.0, filter: "blur(0px)"}}
        transition={{ease : "easeIn", duration: 2}}
        className='font-cabinet text-8xl font-bold text-center'>TOBIAS IS A SOFTWARE DEVELOPER</motion.h1>
        <motion.p
        initial= {{opacity: 0,scale: 0 , filter:" blur(10px)", rotateX: 0}}
        animate = {{opacity: 1,scale: 1.0, filter: "blur(0px)", rotateX: 720}}
        transition={{ease : "easeIn", duration: 5}}
        whileHover={{scale: 1.2}}
        className='font-cabinet text-4xl font-light text-center py-5'>He is good in programming and skillful in frontend-dev</motion.p>
      </motion.div>
    </div>
  )
}

export default Existanimation
