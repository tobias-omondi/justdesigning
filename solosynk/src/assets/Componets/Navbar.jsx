import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='bg-black p-2.5 flex flex-row-reverse'>
        <nav className=' text-white font-light'>
            <ul className='flex flex-row-reverse gap-5'>
                <li>
                    <a href='settings'> <IoSettingsOutline size={30} /> </a>
                </li>
                <li>
                    <a href='edit'> <MdEditNote size={30} /> </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
