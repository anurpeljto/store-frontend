import React, { useState } from 'react'
import Slider from './Slider'

const Gallery = () => {
    const testImages = [
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png',
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png',
        'https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png',
        'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    ]
    const [mainImage, setMainImage] = useState(testImages[0]);
  return (
    <div className='flex-1 flex flex-col items-center justify-center rounded-lg sm:max-w-[1024px] max-w-[400px]'>
        <div className='bg-cream rounded-lg w-full h-full items-center justify-center flex p-5'>        
            <img src={mainImage} className='object-contain sm:h-[480px] h-[450px]'/>
        </div>
        <div className='w-full pt-5 flex flex-row justify-between gap-5'>
            {
                testImages.map((image, index) => <Slider key={index} onClick={() => setMainImage(image)} image={image}/>)
            }
        </div>
    </div>
  )
}

export default Gallery