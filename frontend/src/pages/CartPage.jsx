import React from 'react'
import { useSelector } from 'react-redux'
import CartListing from '../components/Cart/CartListing'

const CartPage = () => {
    const products = useSelector((state) => state.cart.products)
    console.log(products);
  return (
    <div className='w-full h-full flex flex-col mt-5'>
        <h1 className='text-5xl font-bold'>Your cart</h1>
        {
            products.map((product, index) => <CartListing product={product} key={index}/>)
        }
    </div>
  )
}

export default CartPage