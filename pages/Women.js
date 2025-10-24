import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import WatchCategory from "../components/WatchCategory";
import axios from "axios";





const Women = ()=>{
    const [filterlist,setfilterlist] = useState([])
    const productData = useSelector((state)=>{
        return state.ProductList
    })
    useEffect(()=>{
        console.log(productData)
        getFilterList()
    },[])
    async function getFilterList(){
        const data = await axios.get('https://ecomerce-backend-two.vercel.app/api/product/Women');
        console.log(data.data)
        setfilterlist(data.data[0].watchCategory)

        
    }
    return (
        <div className="bg-black">
           
            <Navbar/>
            <h1 className="text-white m-14 text-4xl text-center">{productData.category} Category</h1>
            <div className="md:flex">
                <section>
                 <Filter list = {filterlist} category = {productData.category}/>
                </section>
                <section className="pl-14 grid grid-cols-1 md:grid-cols-3 gap-24">
                   {productData.watchCategory.map((elem)=>{
                 
                    return <WatchCategory categoryList = {elem.items}/>
                   })}
                  
                   
                  
                   
                    
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Women;