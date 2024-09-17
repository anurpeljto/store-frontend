import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const uploadProduct = async(name, category, image, price, navigate) => {
    const request = await axios({
        url: 'http://localhost:3000/api/v1/products/',
        method: 'post',
        data: {
            name,
            category,
            image,
            price
        },
        withCredentials: true
    });

    const response = request.data.product;
    console.log(response);
    if(response) {
        alert('Successfully uploaded product');
        navigate('/');
    }
}

const CreateProduct = ({name, category, image, price}) => {
    const navigate = useNavigate();
    const upload = async() => {
        await uploadProduct(name, category, image, price, navigate);
    }
  return (
    <div className=' flex flex-col justify-center w-[300px] h-full pt-10'>
        <div onClick={upload} className='flex flex-col justify-center items-center bg-yellow w-full h-full p-2 rounded-lg cursor-pointer'>
            <span className='text-lg font-bold'>Create product</span>
        </div>
    </div>
  )
}

export default CreateProduct