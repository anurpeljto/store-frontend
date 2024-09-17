import React from 'react'

const Categories = () => {  
  return (
    <div className='sm:flex hidden flex-row pt-10 pb-5 sm:gap-20 gap-11 border-b-2 border-gray-100'>
        <a href='/women' className='text-blackTheme'>Women</a>
        <a href='/men' className='text-blackTheme'>Men</a>
        <a href='/kids' className='text-blackTheme'>Kids</a>
        <a href='/sports' className='text-blackTheme'>Sports</a>
        <a href='/brands' className='text-blackTheme'>Brands</a>
        <a href='/create' className='text-blackTheme font-bold'>Create new product</a>
    </div>
  )
}

export default Categories