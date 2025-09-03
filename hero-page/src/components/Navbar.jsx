import React from 'react'
import { TbMenu } from "react-icons/tb";
import {motion} from 'framer-motion'

const menuLinks = [
{id: 1, path:'/' , name: 'overview'},
{id: 1, path:'/brand' , name: 'brand'}
]


const Navbar = () => {
  return (
    <motion.div  className="absolute top-4 right-4 cursor-pointer z-50"
    whileHover={{scale: 1.1}}
    whileTap={{scale:0.2}}
    transition={{duration: 1.2}}>
      <TbMenu size ={50} className='text-white font-light' />
    </motion.div >
  )
}

export default Navbar
