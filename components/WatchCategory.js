import react, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const WatchCategory = ({categoryList,category})=>{
    const [list, setList] = useState([]);
    useEffect(()=>{
        console.log(categoryList)
        setList(categoryList);
    },[])
    return (
       <>
       {categoryList.map((item)=>{
        return <ProductCard productImg={item.url} productName={item.watch_name} price={item.price} discountPrice={item.discountPrice} category={category}/>
       })}
       </>
    )
}
export default WatchCategory;