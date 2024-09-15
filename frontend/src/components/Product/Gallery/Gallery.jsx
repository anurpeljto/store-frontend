import React from 'react'
import Slider from './Slider'

const Gallery = () => {
    const testImages = [
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png',
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png',
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png',
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png'
    ]
  return (
    <div className='flex-1 flex flex-col items-center justify-center rounded-lg'>
        <div className='bg-cream rounded-lg w-full h-full items-center justify-center flex p-5'>        
            <img src='https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png' className='object-contain sm:h-[480px] h-[450px]'/>
        </div>
        <div className='w-full pt-5 flex flex-row justify-between gap-5'>
            {
                testImages.map(image => <Slider image={image}/>)
            }
        </div>
    </div>
  )
}

export default Gallery