import React from 'react'
import { Link } from "react-router-dom";
import { ImBin } from "react-icons/im";
import { useContext } from 'react';
import { userContext } from '../context/UserContext';

const Order = ({ productId ,productName, productPrice, productImage, onRemove}) => {
    const { user } = useContext(userContext);
    return (
        <div className='rounded-md shadow-lg w-3/5 mx-auto bg-white border p-4 mb-4 flex justify-between'>
            <div className='flex'>
                <img
                    className='h-28 w-auto'
                    src={productImage}
                    alt="product image" />

                <p className='pl-4'>{productName}</p>
            </div>


            <div>
                <div className='text-indigo-500'>
                    {productPrice}
                </div>
                <div className='pt-6 flex'>
                    <p className='text-xs'>QTY:</p>
                    <select className='pl-1 text-xs'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div className="pt-4">
                    <Link 
                        onClick={(e) => {
                            e.preventDefault(); // Prevent navigation
                            onRemove(productId);
                        }}
                        className="flex">
                        <ImBin className="text-xs" /> <p className="text-xs pl-1">Remove</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Order