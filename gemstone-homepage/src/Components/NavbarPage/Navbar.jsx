import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
      <div className="fixed top-0 left-0 w-full z-30">

      <nav className='flex flex-row items-center justify-between px-6 py-4 text-white gap-8 font-sans'>
        <h1 className='text-3xl'>Logo</h1>
        <div>
          <h1 className='text-xl font-extralight'>TobzArtWork Designx</h1>
        </div>

        {/* drop menu icon */}
        <div>
          <HiOutlineMenuAlt4 size = {25} className='cursor-pointer'/>
        </div>
      </nav>
      </div>
  )
}

export default Navbar
