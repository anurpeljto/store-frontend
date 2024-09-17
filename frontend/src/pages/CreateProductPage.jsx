import axios from 'axios'
import React, { useEffect, useState } from 'react'


const fetchCategories = async() => {
  const data = await axios({
    url: 'http://localhost:3000/api/v1/category',
    method:'get',
    withCredentials: true
  });

  const results = data.data;
  const categories = results.categories;
  return categories;
}

const CreateProductPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    try {
      const getCategories = async() => {
        const cat = await fetchCategories();
        setCategories(cat);
      }
      getCategories();
    } catch (error) {
      
    }
  }, []);
  if(categories) {
    return ( 
      // name
      <div className='mt-5 p-5 rounded-lg flex flex-col items-center justify-center w-full h-full bg-cream gap-6'>
        <div className='w-full flex flex-col gap-2 items-center justify-center'>
          <span className='font-bold text-lg'>Product name</span>
          <input className='w-1/2 rounded-lg p-2' type="text" name="" id="" />
        </div>
  
        {/* Category */}
        <div className='w-full flex flex-col gap-2 items-center justify-center'>
          <span className='font-bold text-lg'>Product category</span>
          <form action="" className='flex flex-row gap-10 mt-2'>
            {
              categories.map((category, index) => {
                return (
                <div className='flex flex-col gap-2' key={index}>
                  <label>{category.name}</label>
                  <input type="radio" name='category' value={category.name}/>
                </div>
                )
                
              })
            }
            </form>
        </div>

        {/* Upload image */}
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