import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartListing from '../components/Cart/CartListing'
import CheckoutButton from '../components/Cart/CheckoutButton'

const CartPage = () => {
    const products = useSelector((state) => state.cart.products)
    console.log(products);
    const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className='w-full h-full flex flex-col bg-cream rounded-lg sm:p-5 p-5 items-center justify-center'>
        <h1 className='text-5xl font-bold mb-10'>Your cart</h1>
        {
            products.map((product, index) => <CartListing setPrice={setTotalPrice} product={product} key={index}/>)
        }

        <div className='flex sm:w-[900px] flex-col justify-between items-center'>
          <div className='flex items-center justify-start p-5'>
            <span className='text-3xl font-bold'>Total ${totalPrice}</span>
          </div>

          <CheckoutButton/>
        </div>

    </div>
  )
}

export default CartPage