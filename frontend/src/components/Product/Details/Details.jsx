import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import AddToCart from './AddToCart';

const Details = ({product}) => {
  return (
    <div className='flex-1 flex flex-col justify-center gap-5'>
      <h1 className='font-medium text-lg'>{product.category.name}</h1>
      <h1 className='text-2xl font-bold'>{product.name}</h1>
      <div className='flex flex-row gap-2 items-center'>
        <IoStarSharp fill='orange'/>
        <IoStarSharp fill='orange'/>
        <IoStarSharp fill='orange'/>
        <p>44 reviews</p>
      </div>
      <h1 className='text-3xl font-bold mt-10'>$99.99</h1>
      <AddToCart product={product}/>
    </div>
  )
}

export default Details