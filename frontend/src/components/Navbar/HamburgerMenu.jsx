import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
  return (
    <div className='sm:hidden block'>
        <RxHamburgerMenu fill='black' className='h-9 w-9'/>
    </div>
  )
}

export default HamburgerMenu