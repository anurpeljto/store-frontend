import React, { useState } from 'react'
import axios from 'axios'

const uploadImage = async(data, onClickUploadImage) => {
    const formData = new FormData();
    formData.append('image', data);
    const request = await axios({
        url:'http://localhost:3000/api/v1/upload',
        method: 'post',
        data: formData,
        withCredentials: true
    })

    const response = request.data;
    const imgUrl = response.image.src;
    console.log(response);
    if(response) {
        alert('Successfully uploaded image');
    }
    onClickUploadImage(imgUrl);
    return imgUrl;
}

const UploadImageBtn = ({onClick}) => {
  const [image, setImage] = useState(null);

  const handleUpload = async() => {
    if (!image) {
      alert('Please select an image to upload');
      return;
    }
    await uploadImage(image, onClick);
  }
  return (
    <div className='text-black flex flex-col gap-5 items-start justify-start rounded-lg'>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" className='block w-full'/>
        <span onClick={handleUpload} className='font-bold text-md cursor-pointer bg-white p-5 rounded-lg'>Upload Image</span>
    </div>
  )
}

export default UploadImageBtn