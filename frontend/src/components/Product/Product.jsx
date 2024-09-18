import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product?id=${product._id}`);
  }

  return (
    <div onClick={handleNavigation} className='cursor-pointer sm:w-[320] sm:h-[400px] bg-cream rounded-lg flex flex-col items-center justify-center p-5'>
        <img src={product.image} className='object-contai h-[250px]'/>
       <div className='flex justify-center items-center flex-col gap-2'>
        <p className='text-normal'>{product.name}</p>
        <span className='font-bold '>{product.price}</span>
       </div>
    </div>
  )
}

export default Product