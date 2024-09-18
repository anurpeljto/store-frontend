import React from 'react'

const Slider = ({image, onClick}) => {
  return (
    <div onClick={onClick} className='w-[200px] h-[150px] bg-cream rounded-lg p-5 flex items-center justify-center'>
        <img src={image} className='w-full h-full object-fill' />
    </div>
  )
}

export default Slider