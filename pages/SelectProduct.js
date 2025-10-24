import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const SelectProduct = () => {
    const data = useSelector((state) => {
        return state.selectProduct
    })




    async function addToCart() {
        const add = await axios.post('https://ecomerce-backend-two.vercel.app/api/cart', { category: data.category, url: data.url, name: data.name, price: data.discountPrice }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        console.log(add.data)
        if (add.data == 'save') {
            dispatch(increment(1));
        }
        alert(add.data)
    }



    return (
        <div className="bg-black">
           
            <h1 className="text-white m-14 text-4xl text-center">{data.category} Category</h1>
            <center>
            <div className="cursor-pointer border border-gray-200 rounded-lg p-4 shadow-md hover:scale-105 transform transition-transform duration-300 w-60">
                <div className="mb-4">
                    <img
                        src={data.url}
                        alt={data.name}
                        className="w-full h-48 object-cover rounded-md"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
                    <div className="flex justify-center items-center space-x-2 mt-2">
                        <span className="text-xl font-bold text-red-600">${data.discountPrice}</span>
                        <span className="text-gray-500 line-through">${data.price}</span>
                    </div>

                    {/* Button Group */}
                    <div className="flex justify-between mt-4 space-x-2">
                        {/* Add to Cart Button */}
                        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300" onClick={addToCart}>
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
            </center>
            <Footer />
        </div>
    )

}

export default SelectProduct;