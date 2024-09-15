import React from 'react'

const Slider = ({image}) => {
  return (
    <div className='w-full bg-cream rounded-lg p-5'>
        <img src={image} className='object-contain sm:h-[150px]' />
    </div>
  )
}

export default Slider