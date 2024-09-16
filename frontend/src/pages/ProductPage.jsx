import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";
import Gallery from '../components/Product/Gallery/Gallery';
import Details from '../components/Product/Details/Details';


const fetchProduct = async (id) => {
    const response = await axios({
        method: 'get',
        url: `http://localhost:3000/api/v1/products/${id}`
    });
    console.log(response.data.product)
    return response.data.product;
}

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
    useEffect(() => {
        const loadProduct = async() => {
            try {
                const fetchedProduct = await fetchProduct(productId);
                setProduct(fetchedProduct);
            } catch (error) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }

        if(productId) {
            loadProduct();
        }
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
      }
      const categoryLink = product.category.name;

  return (
    <div className='w-full h-full flex flex-col sm:mt-10 mt-20 sm:gap-10'>
        <div className='flex items-center gap-3 justify-normal text-grayTheme col-span-2 h-[20px] sm:px-0 px-5'>
            <a href={categoryLink}>{product.category.name}</a>
            <FaArrowRightLong />
            <span>{product.name}</span>
        </div>

        <div className='flex sm:flex-row flex-col justify-between gap-10 items-start'>
            {/* gallery here */}
            <Gallery/>
        {/* details here */}
            <Details product={product}/>
        </div>
    </div>
  )
}

export default ProductPage