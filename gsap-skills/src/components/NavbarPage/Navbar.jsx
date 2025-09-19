import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex gap-3.5 text-blue-300'>
        <Link to='/' className='font-[clash] ' >DEMO</Link>
        <Link to='/easing' className='font-[clash]' >EASING</Link>
        <Link to='/back' className='font-[clash]' >Back ease</Link>
        <Link to='/bounce' className='font-[clash]' >Bounce ease</Link>
        <Link to='/elastic' className='font-[clash]' >Elastic Easing</Link>
        <Link to='/stagger' className='font-[clash]' >Stagger Gsap</Link>
      </nav>
    </div>
  )
}

export default Navbar
