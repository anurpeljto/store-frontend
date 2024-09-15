import React from 'react'
import { useSelector } from 'react-redux'


const CartItemCounter = () => {
  const items = useSelector((state) => state.cart.products);
  const numberOfItems = items.length;
  
  if(numberOfItems > 0) {
    return (
      <div className='absolute flex left-3 bottom-4 bg-yellow w-[25px] h-[25px] rounded-full items-center justify-center'>
          <span className='text-sm text-blackTheme'>{numberOfItems}</span>
      </div>
    )
  } else {
    return (
      null
    ) 
  }
}

export default CartItemCounter