import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import axios from 'axios';


const CheckoutButton = () => {
    const handlePress = () => {
        axios.get('https://full-store.onrender.com/api/v1/checkout')
    }
  return (
    <div onClick={handlePress} className='flex cursor-pointer gap-2 items-center justify-center bg-blackTheme h-[50px] sm:w-[300px] w-[150px] mt-2 rounded-lg'>
        <IoBagCheckOutline stroke='white' className='h-[25px] w-[25px]'/>
        <span className='text-white text-lg'>Checkout</span>
    </div>
  )
}

export default CheckoutButton