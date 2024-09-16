import React, { useEffect } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { increaseQuantity, decreaseQuantity } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartListing = ({product, setPrice}) => {
    const dispatch = useDispatch();
    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity({product}));
    }
    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity({product}));
    }

    useEffect(() => {
        setPrice += total
    }, [product.quantity])

    const taxes = Number((10/100 * (product.quantity * 99.99)).toFixed(2))
    const total = ((product.quantity*99.99) + taxes).toFixed(2);
  return (
    <div className='bg-cream grid grid-cols-2 grid-rows-auto sm:grid-flow-col items-top justify-between py-10 border-b-2 border-blackTheme'>
        {/* image of product */}
        <div className='flex flex-row gap-3'>
            <img src='https://res.cloudinary.com/djlse3agg/image/upload/v1726168562/file-upload/tmp-2-1726168561491_ljsbmz.png' className='object-contain w-[200px] h-[200px] bg-white p-5 ml-5 rounded-lg'/>
            <div className='flex flex-col gap-3 w-full'>
                <h1 className='text-xl font-bold'>{product.name}</h1>
                <h1 className='text-normal font-bold'>{product.category.name}</h1>
                <div className='flex flex-row justify-between mt-5 gap-2 items-center sm:w-[200px]'>
                    <CiSquareMinus onClick={handleDecreaseQuantity} className='h-[30px] w-[30px] cursor-pointer'/>
                    <span>{product.quantity}</span>
                    <CiSquarePlus onClick={handleIncreaseQuantity} className='h-[30px] w-[30px] cursor-pointer'/>
                </div>
                <div className='sm:hidden flex flex-col gap-2'>
                    <span className='text-xl font-bold'>${total}</span>
                </div>
            </div>
            <div className='sm:flex hidden flex-col absolute right-20 gap-5'>
                <span>{product.quantity} x <strong>$99.99</strong></span>
                <hr />
                <span>Tax & PDV: ${taxes} </span>
                <hr />
                <span className='text-xl font-bold'>${total}</span>
            </div>

        </div>
        {/* middle part */}
        
    </div>
  )
}

export default CartListing