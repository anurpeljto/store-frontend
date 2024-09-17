import React from 'react'
import colors from '../../constants'
import SearchBox from './SearchBox'
import Cart from './Cart'
import HamburgerMenu from './HamburgerMenu'
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import MobSearchBox from './MobSearchBox'
import Cookies from 'js-cookie'
import axios from 'axios'


const checkAuth = async(navigate) => {
  try {
    const response = await axios({
      url:'http://localhost:3000/api/v1/auth/check-auth',
      method:'get',
      withCredentials:true
    });
  
    const {authenticated} = response.data;
    if(authenticated) {
      navigate('/profile')
    } else {
      navigate('/login');
    }
    return authenticated;
  } catch (error) {
    if(error) {
      alert('Redirecting to login');
      navigate('/login');
    }
  }
}

function Navbar({ onSearchChange }) {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  }

  const goToProfile = () => {
    checkAuth(navigate);
  }
  return (
    <div className='flex flex-row justify-between sm:items-center items-start w-full p-5'>
      <div onClick={handleHome} className='cursor-pointer sm:flex hidden'>
          <span className='sm:text-4xl text-3xl font-bold text-blackTheme'>Anur.</span>
          <span className='sm:text-4xl text-3xl font-extrabold text-grayTheme'>Peljto</span>
      </div>

      <div onClick={handleHome} className='cursor-pointer sm:hidden flex flex-col gap-5 w-full'>
          <div>
            <span className='sm:text-4xl text-3xl font-bold text-blackTheme'>Anur.</span>
            <span className='sm:text-4xl text-3xl font-extrabold text-grayTheme'>Peljto</span>
          </div>

          <MobSearchBox onSearchChange={onSearchChange}/>
      </div>

      <SearchBox onSearchChange={onSearchChange}/>

      <div className='sm:flex hidden flex-row gap-5 items-center justify-between'>
        <Cart/>
        <div className='flex flex-col'>
          <FiHeart className='h-7 w-7'/>
        </div>
        <FaRegUser onClick={goToProfile} className='cursor-pointer h-7 w-7'/>
      </div>

      <HamburgerMenu/>

    </div>
  )
}

export default Navbar