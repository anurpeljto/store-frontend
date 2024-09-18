import React, { useState } from 'react'
import Slider from './Slider'

const Gallery = ({product}) => {

    const images = product.image.map((img) => img.src);
    const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className='flex-1 flex flex-col items-center justify-center rounded-lg sm:max-w-[1024px] max-w-[400px] sm:p-0 p-5'>
        <div className='bg-cream rounded-lg w-full h-full items-center justify-center flex p-5'>        
            <img src={mainImage} className='object-contain sm:h-[480px] h-[450px]'/>
        </div>
        <div className='w-full pt-5 flex flex-row justify-between gap-5'>
            {
                images.map((image, index) => <Slider key={index} onClick={() => setMainImage(image)} image={image}/>)
            }
        </div>
    </div>
  )
}

export default Gallery