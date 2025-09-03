import React from 'react'
import Navbar from './Navbar'
import imageone from '/src/assets/goose-3477674.jpg'
import {motion} from 'framer-motion'

const Overview = () => {
  return (
    <motion.div className='relative w-full h-screen overflow-hidden'>

      {/* import images for slider */}
      <img src={imageone} alt='monkey'   className="w-full h-full object-cover brightness-75" />
      
      <Navbar />
      <motion.div className='absolute top-1/2 left-10 text-white z-20'>
      <h1 className='text-white font-[Boska] italic text-3xl font-light'>ARTWORK STUDIO</h1>
      </motion.div>
    </motion.div>
  )
}

export default Overview
