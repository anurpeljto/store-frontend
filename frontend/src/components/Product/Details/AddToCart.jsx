import React from 'react'
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart/cartSlice';

const AddToCart = ({product}) => {
    const dispatch = useDispatch();
    const handlePress = () => {
        dispatch(addToCart(product));
    }
  return (
    <div onClick={handlePress} className='sm:w-[400px] w-[200px] h-[50px] bg-blackTheme flex flex-row justify-center items-center rounded-lg gap-2 cursor-pointer'>
        <RiShoppingBag4Fill fill='white' className='h-[20px] w-[20px]'/>
        <span className='text-white'>Add to cart</span>
    </div>
  )
}

export default AddToCart