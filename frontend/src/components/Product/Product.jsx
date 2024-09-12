import React from 'react'

const Product = ({product}) => {
  return (
    <div className='sm:w-[320] sm:h-[400px] bg-cream rounded-lg flex flex-col items-center justify-center p-5'>
        <img src='https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png' className='object-contai h-[250px]'/>
        <p className='text-normal'>{product.name}</p>
    </div>
  )
}

export default Product