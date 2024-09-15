import React from 'react'

const Slider = ({image, onClick}) => {
  return (
    <div onClick={onClick} className='w-full bg-cream rounded-lg p-5'>
        <img src={image} className='object-contain sm:h-[100px]' />
    </div>
  )
}

export default Slider