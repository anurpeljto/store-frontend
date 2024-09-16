import React from 'react'
import colors from '../../constants'
import SearchBox from './SearchBox'
import Cart from './Cart'
import HamburgerMenu from './HamburgerMenu'
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


function Navbar({ onSearchChange }) {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }
  return (
    <div className='flex flex-row justify-between items-center w-full sm:p-0 p-5'>
      <div onClick={handleHome} className='cursor-pointer'>
          <span className='sm:text-4xl text-3xl font-bold text-blackTheme'>Anur.</span>
          <span className='sm:text-4xl text-3xl font-extrabold text-grayTheme'>Peljto</span>
      </div>

      <SearchBox onSearchChange={onSearchChange}/>
      
      <div className='sm:flex hidden flex-row gap-5 items-center justify-between'>
        <Cart/>
        <div className='flex flex-col'>
          <FiHeart className='h-7 w-7'/>
        </div>
        <FaRegUser className='h-7 w-7'/>
      </div>

      <HamburgerMenu/>

    </div>
  )
}

export default Navbar