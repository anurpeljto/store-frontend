import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Product from '../components/Product/Product';

const fetchProducts = async(category) => {
  try {
    const response = await axios({
      method: 'get',
      url: `http://localhost:3000/api/v1/products?category=${category}`,
    });
    console.log(response.data.product)
    return response.data.product;

  } catch (error) {
    throw new Error('Unable to fetch, ', error);
  }
}

const HomePage = ({category}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts(category);
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, [category])
  return (
    <div className='w-full h-full py-10 sm:grid flex flex-col gap-16 grid-cols-4'>
        {
          products.map((product, index) => 
            <Product product={product}/>
          )
        }
    </div>
  )
}

export default HomePage