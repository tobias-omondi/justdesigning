import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex gap-3.5 text-blue-300'>
        <Link to='/' className='font-[clash] ' >DEMO</Link>
        <Link to='/easing' className='font-[clash]' >EASING</Link>
      </nav>
    </div>
  )
}

export default Navbar
