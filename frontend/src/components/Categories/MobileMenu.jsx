import React from 'react'

const MobileMenu = ({isVisible}) => {  
  return (
    <div className={`sm:hidden ${isVisible ? `flex` : `hidden`} top-0 absolute z-20 flex-col pt-10 pb-5 sm:gap-20 gap-7 border-b-2 border-gray-100 right-0 bg-blackTheme w-[200px] justify-center items-center`}>
        <a href='/women' className='text-white'>Women</a>
        <hr className='w-full border-grayTheme'/>
        <a href='/men' className='text-white'>Men</a>
        <hr className='w-full border-grayTheme'/>
        <a href='/kids' className='text-white'>Kids</a>
        <hr className='w-full border-grayTheme'/>
        <a href='/profile' className='text-white'>Profile</a>
        <hr className='w-full border-grayTheme'/>
        <a href='/cart' className='text-white'>Cart</a>
        <hr className='w-full border-grayTheme'/>
        <a href='/create' className='text-white font-bold'>Create new product</a>
    </div>
  )
}

export default MobileMenu