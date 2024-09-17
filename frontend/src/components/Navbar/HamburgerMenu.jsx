import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/menu/menuSlice';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const handleHamburger = () => {
    dispatch(toggleMenu());
  }
  return (
    <div onClick={handleHamburger} className='sm:hidden block absolute right-5 z-20'>
        <RxHamburgerMenu fill='black' className='h-9 w-9'/>
    </div>
  )
}

export default HamburgerMenu