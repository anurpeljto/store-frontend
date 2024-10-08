import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Product from '../components/Product/Product';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector } from 'react-redux';
import { ReactTyped } from 'react-typed';

const fetchProducts = async (category, page, search) => {
  try {
    let url = `https://full-store.onrender.com/api/v1/products?`;

    if (search) {
      url += `search=${search}&`;
    }
    if (category) {
      url += `category=${category}&`;
    }
    if (page) {
      url += `page=${page}&`;
    }
    
    url = url.endsWith('&') ? url.slice(0, -1) : url;

    const response = await axios.get(url);
    const products = response.data.products;
    const numOfPages = response.data.numOfPages;
    return {products, numOfPages};

  } catch (error) {
    throw new Error('Unable to fetch', error);
  }
};


const HomePage = ({category}) => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  
  useEffect(() => {
    const loadProducts = async () => {
      let {products, numOfPages} = await fetchProducts(category, page, searchTerm);
      setProducts(products);
      setNumOfPages(numOfPages);
    };
    loadProducts();
  }, [category, page, searchTerm])

  const handleIncreasePage = () => {
    if(page < numOfPages){
      setPage(page+1);
    }

  }

  const handleDecreasePage = () => {
    if(page > 1) {
      setPage(page-1);
    }
  }

  if(products) {
  return (
    <div className='w-full h-full py-10 px-5 sm:grid flex flex-col sm:gap-16 gap-5 grid-cols-4'>
        {
          products.map((product, index) => 
            <Product product={product} key={index}/>
          )
        }

        <div className='col-span-4 flex items-center justify-center gap-5'>
          <IoIosArrowRoundBack onClick={handleDecreasePage} className='w-8 h-8 cursor-pointer'/>
          <span className='text-lg'>{page} of {numOfPages}</span>
          <IoIosArrowRoundForward onClick={handleIncreasePage} className='w-8 h-8 cursor-pointer'/>
          </div>
    </div>
  )
  } else {
    return (
      <div className='w-full h-full py-10 sm:px-0 px-5 sm:grid flex flex-col sm:gap-16 gap-5 grid-cols-4'>
          <span>Loading products<ReactTyped strings={'...'} loop typeSpeed={100} backSpeed={50}/></span>
  
          <div className='col-span-4 flex items-center justify-center gap-5'>
            <IoIosArrowRoundBack onClick={handleDecreasePage} className='w-8 h-8 cursor-pointer'/>
            <span className='text-lg'>{page} of {numOfPages}</span>
            <IoIosArrowRoundForward onClick={handleIncreasePage} className='w-8 h-8 cursor-pointer'/>
            </div>
      </div>
    )
  }
}

export default HomePage