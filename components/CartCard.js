import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCartlist } from "../state/Slice/CartSlice";
import axios from "axios";
import { decrement } from "../state/Slice/CartCountSlice";
const CartCard = ({productData})=>{
    const [edit,setedit] = useState(false)
    const [editvalue,seteditvalue] = useState(productData.qty)
    const dispatch = useDispatch();

async function deleteItem(){
    const deleteRes = await axios.delete(`https://ecomerce-backend-mauve.vercel.app/api/cart/${productData._id}`,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      } )
      if(deleteRes.data == 'deleted'){
      const data = await axios.get('https://ecomerce-backend-mauve.vercel.app/api/cart',{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      } )

      dispatch(changeCartlist(data.data));
      dispatch(decrement(1))
    }
    alert(deleteRes.data)

}


async function editItem(){
    const editRes = await axios.put(`https://ecomerce-backend-mauve.vercel.app/api/cart/${productData._id}`,{qty:editvalue},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      } )
      if(editRes.data == 'updated'){
      const data = await axios.get('https://ecomerce-backend-mauve.vercel.app/api/cart',{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      } )

      dispatch(changeCartlist(data.data));
    }
    alert(editRes.data)
    setedit(false)


}

    return (
        <>
          {edit?(
              <div className="md:flex text-white p-5 border w-fit m-5">
              <img width="200px" src={productData.url} alt="cartImage" />
              <div className="p-5">
                 
                  <h1 className="text-left text-2xl">{productData.category} Category</h1>
                  <h2>{productData.name}</h2>
                  <p className="flex justify-between"><span>${productData.price}</span><span>Qty:{productData.qty}</span> </p>
                  <input className="text-black p-1" type="Number" value={editvalue} onChange={(e)=>seteditvalue(e.target.value)} placeholder="edit quantity here" />
                 <br /><br /> <button className="border p-1 px-3 hover:bg-white hover:text-black"  onClick={editItem} >Edit</button>
              </div>
           </div>
          ):(
            <div className="md:flex text-white p-5 border w-fit m-5">
            <img width="200px" src={productData.url} alt="cartImage" />
            <div className="p-5">
               <div className="text-right"> <button onClick={()=>setedit(true)}>Edit</button></div>
                <h1 className="text-left text-2xl">{productData.category} Category</h1>
                <h2>{productData.name}</h2>
                <p className="flex justify-between"><span>${productData.price}</span> <span>Qty:{productData.qty}</span></p>
                <button className="p-2 text-2xl flex items-center" onClick={deleteItem}><span>&times;</span> Remove</button>
            </div>
         </div>
          )}
        </>
        
    )
}
export default CartCard;