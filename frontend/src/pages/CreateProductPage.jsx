import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UploadImageBtn from '../components/Product/Create/UploadImageBtn';
import CreateProduct from '../components/Product/Create/CreateProduct';
import { useNavigate } from 'react-router-dom';


const fetchCategories = async(navigate) => {
  try {
    const data = await axios({
      url: 'https://full-store.onrender.com/api/v1/category',
      method:'get',
      withCredentials: true
    });
  
    const results = data.data;
    const categories = results.categories;
    return categories;
  } catch (error) {
    alert('User not logged in!');
    navigate('/login')
  }
}

const CreateProductPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState(null);
  const [price, setPrice] = useState('');

  const onClickUploadImage = (img) => {
    setImageURL(img);
  }

  useEffect(() => {
    try {
      const getCategories = async() => {
        const cat = await fetchCategories(navigate);
        setCategories(cat);
      }
      getCategories();
    } catch (error) {
    }
  }, []);
  if(categories) {
    return ( 
      // name
      <div className='p-5 rounded-lg grid grid-rows-2 grid-cols-1 items-center justify-center w-full h-screen bg-cream gap-5'>
        <div className='w-full flex flex-col gap-2'>
              <span className='font-bold text-lg'>Product name</span>
              <input onChange={(e) => setName(e.target.value)} className='w-1/2 rounded-lg p-2' type="text" name="" id="" />
              <span><i>Note: Please keep product names simple</i></span>
            </div>
      
            {/* Category */}
            <div className='w-full flex flex-col gap-2 '>
              <span className='font-bold text-lg'>Product category</span>
              <form action="" className='flex flex-row gap-10'>
                {
                  categories.map((category, index) => {
                    return (
                    <div className='flex flex-col gap-2' key={index}>
                      <label>{category.name}</label>
                      <input onChange={(e) => setCategory(e.target.value)} type="radio" name='category' value={category._id}/>
                    </div>
                    )
                    
                  })
                }
                </form>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='font-bold text-lg'>Upload image(s)</span>
                <UploadImageBtn onClick={onClickUploadImage}/>
            </div>

            <div className='flex flex-col gap-2'>
                <span className='font-bold text-lg'>Price</span>
                <div className='flex relative items-center'>
                  <input onChangeCapture={(e) => setPrice(`$${e.target.value}`)} type="text" name="" id="" className='w-[300px] p-2 px-6 rounded-lg focus:outline-none'/>
                  <span className='text-xl font-bold absolute left-2'>$</span>
                </div>
            </div>

            <CreateProduct name={name} category={category} image={imageURL} price={price}/>
      </div>
    )
  } else{
    return (
      <div className='mt-5 p-5 rounded-lg flex flex-col items-center justify-center w-full h-full bg-cream gap-6'>
        <div className='w-full flex flex-col gap-2 items-center justify-center'>
          <span className='font-bold text-lg'>Product name</span>
          <input className='w-1/2 rounded-lg p-2' type="text" name="" id="" />
        </div>
  
        <div className='w-full flex flex-col gap-2 items-center justify-center'>
          <span className='font-bold text-lg'>Product category</span>
          <div className='flex flex-row justify-evenly gap-5 w-full'>
            <span>Loading categories...</span>
          </div>
        </div>

      </div>
    )
  }
}

export default CreateProductPage