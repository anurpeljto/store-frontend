import React from 'react'
import colors from '../../constants'
import SearchBox from './SearchBox'
import Cart from './Cart'
import HamburgerMenu from './HamburgerMenu'
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";


function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center p-10 w-full'>
      <div>
          <span className='sm:text-4xl text-3xl font-bold text-blackTheme'>Anur.</span>
          <span className='sm:text-4xl text-3xl font-extrabold text-grayTheme'>Peljto</span>
      </div>

      <SearchBox/>
      
      <div className='sm:flex hidden flex-row gap-5 items-center justify-between'>
        <Cart/>
        <FiHeart className='h-7 w-7'/>
        <FaRegUser className='h-7 w-7'/>
      </div>

      <HamburgerMenu/>

    </div>
  )
}

export default Navbar