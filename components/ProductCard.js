// components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../state/Slice/CartCountSlice';
import axios from 'axios';
import { ChangeProductObject } from '../state/Slice/SelectedProductDisplaySlice';
import Link from 'next/link';

const ProductCard = ({ productImg, productName, price, discountPrice,category }) => {
  const dispatch = useDispatch();
  
async function addToCart(){
  const data = await axios.post('https://ecomerce-backend-mauve.vercel.app/api/cart',{category:category,url:productImg,name:productName,price:discountPrice},{
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`, 
    }
  } )
  console.log(data.data)
  if(data.data=='save'){
    dispatch(increment(1));
  }
  alert(data.data)
}


function explore(){
  dispatch(ChangeProductObject({url:productImg,name:productName,price:price,discountPrice:discountPrice,category}));
}








  return (
    <div className="cursor-pointer border border-gray-200 rounded-lg p-4 shadow-md hover:scale-105 transform transition-transform duration-300 w-60">
      <div className="mb-4">
        <img
          src={productImg}
          alt={productName}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800">{productName.slice(0,10)}....</h2>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <span className="text-xl font-bold text-red-600">${discountPrice}</span>
          <span className="text-gray-500 line-through">${price}</span>
        </div>
        
        {/* Button Group */}
        <div className="flex justify-between mt-4 space-x-2">
          {/* Add to Cart Button */}
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300" onClick={addToCart}>
            Add to Cart
          </button>
          {/* Explore Button */}
          <Link href='/SelectProduct'><button className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300" onClick={explore}>
            Explore
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
