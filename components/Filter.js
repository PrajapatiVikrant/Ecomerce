import axios from "axios"
import { useDispatch } from "react-redux";
import { ChangeProductlist } from "../state/Slice/ProductsDisplaySlice";
import { useState } from "react";

const Filter = ({list,category})=>{
   const [checkvalue,setcheckvalue] = useState(false)
   const dispatch = useDispatch();
  async function handleClick(type,index){
        if(document.getElementById(`${category}-${index}`).checked){
             const data = await axios.get(`https://ecomerce-backend-mauve.vercel.app/api/product/${category}/${type}`);
             dispatch(ChangeProductlist(data.data))
             list.map((elem,i)=>{
                 if(i != index){
                  document.getElementById(`${category}-${i}`).checked = false
                 }
             })
            
            
           
        }else{
         const data = await axios.get(`https://ecomerce-backend-mauve.vercel.app/api/product/${category}`);
         
         dispatch(ChangeProductlist(data.data[0]))
        }
   }
    return (
       <ul className="text-white text-2xl">
        {list.map((elem,index)=>{
           return <li className="flex items-center"><input  id={`${category}-${index}`} className="h-6 w-6 mx-5" type="checkbox" onClick={()=>handleClick(elem.type,index)} />{elem.type}</li>
        })}
        
       </ul>
    )
}
export default Filter;