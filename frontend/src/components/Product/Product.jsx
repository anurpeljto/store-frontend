import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product?id=${product._id}`);
  }

  return (
    <div onClick={handleNavigation} className='cursor-pointer sm:w-[320] sm:h-[400px] bg-cream rounded-lg flex flex-col items-center justify-center p-5'>
        <img src='https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png' className='object-contai h-[250px]'/>
        <p className='text-normal'>{product.name}</p>
    </div>
  )
}

export default Product