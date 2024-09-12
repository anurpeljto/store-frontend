import React from 'react'
import CartItemCounter from './CartItemCounter';
import { RiShoppingBag4Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className='relative'>
        <CartItemCounter/>
        <RiShoppingBag4Line className='h-7 w-7'/>
    </div>
  )
}

export default Cart