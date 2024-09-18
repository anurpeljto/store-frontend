import React, { useState } from 'react'
import axios from 'axios'

const uploadImage = async(data, onClickUploadImage) => {
    const formData = new FormData();
    for(let i = 0; i < data.length; i++) {
      formData.append('image', data[i]);
    }
    const request = await axios({
        url:'http://localhost:3000/api/v1/upload',
        method: 'post',
        data: formData,
        withCredentials: true
    })
    const response = request.data;
    const image = response.image;
    if(response) {
        alert('Successfully uploaded image');
    }
    onClickUploadImage(image);
    return image;
}

const UploadImageBtn = ({onClick}) => {
  const [image, setImage] = useState(null);

  const handleUpload = async() => {
    if (!image) {
      alert('Please select an image to upload');
      return;
    }
    const imgUrls = await uploadImage(image, onClick);
    onClick(imgUrls);
  }
  return (
    <div className='text-black flex flex-col gap-5 items-start justify-start rounded-lg'>
        <input multiple onChange={(e) => setImage(e.target.files)} type="file" className='block w-full'/>
        <span onClick={handleUpload} className='font-bold text-md cursor-pointer bg-white p-5 rounded-lg'>Upload Image</span>
    </div>
  )
}

export default UploadImageBtn