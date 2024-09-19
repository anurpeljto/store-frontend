import React, { useEffect } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { increaseQuantity, decreaseQuantity } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartListing = ({product}) => {
    const dispatch = useDispatch();
    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity({product}));
    }
    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity({product}));
    }
    const price = product.price.split('$')[1];
    const taxes = Number((10/100 * (product.quantity * price)).toFixed(2))
    const total = ((product.quantity*price) + taxes).toFixed(2);
  return (
    <div className='bg-cream grid grid-cols-2 grid-rows-auto sm:grid-flow-col items-top justify-between py-10 border-b-2 border-blackTheme sm:w-[900px]'>
        {/* image of product */}
        <div className='sm:grid flex flex-row grid-cols-2 grid-flow-col justify-between gap-10 w-full'>

            <div className='flex flex-row gap-5'>
                <img src={product.image[0].src} className='object-contain w-[200px] h-[200px] bg-white p-5 ml-5 rounded-lg'/>
                <div className='flex flex-col gap-3 w-full'>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <h1 className='text-normal font-bold'>{product.category.name}</h1>
                    <div className='flex flex-row justify-between mt-5 gap-2 items-center sm:w-[100px]'>
                        <CiSquareMinus onClick={handleDecreaseQuantity} className='h-[30px] w-[30px] cursor-pointer'/>
                        <span>{product.quantity}</span>
                        <CiSquarePlus onClick={handleIncreaseQuantity} className='h-[30px] w-[30px] cursor-pointer'/>
                    </div>
                    <div className='sm:hidden flex flex-col gap-2'>
                        <span className='text-xl font-bold'>${total}</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='sm:grid hidden grid-cols-1 items-between justify-start col-start-3 gap-5 grid-flow-row w-[200px]'>
                <span>{product.quantity} x <strong>{product.price}</strong></span>
                <hr />
                <span>Tax & PDV: ${taxes} </span>
                <hr />
                <span className='text-xl font-bold'>${total}</span>
        </div>
        {/* middle part */}
        
    </div>
  )
}

export default CartListing