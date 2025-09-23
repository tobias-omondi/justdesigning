import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
      <div className='w-full absolute top-0 left-0  z-10'>

      <nav className='flex flex-row items-center justify-between px-6 py-4 text-white gap-8 font-sans'>
        <h1 className='text-3xl'>Logo</h1>
        <div>
          <h1 className='text-3xl font-medium shadow-2xl'>TobzArtWork Designx</h1>
        </div>

        {/* drop menu icon */}
        <div>
          <HiOutlineMenuAlt4 size = {22} />
        </div>
      </nav>
      </div>
  )
}

export default Navbar
