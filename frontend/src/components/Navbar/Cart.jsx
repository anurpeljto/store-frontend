import React, { useState } from 'react'
import CartItemCounter from './CartItemCounter';
import { RiShoppingBag4Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigation = useNavigate();
  const onPress = () => {
    navigation('/cart');
  }
  return (
    <div onClick={onPress} className='relative cursor-pointer'>
        <CartItemCounter/>
        <RiShoppingBag4Line className='h-7 w-7'/>
    </div>
  )
}

export default Cart