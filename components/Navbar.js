import { FaClock } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import react, { useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ChangeProductlist } from "../state/Slice/ProductsDisplaySlice";
import { getCartNo } from "../state/Slice/CartCountSlice";
import { ChangeName } from "../state/Slice/NameSlice";
import { changeCartlist } from "../state/Slice/CartSlice";

const Navbar = ()=>{
  
  const counter = useSelector((state)=>{
    return state.counter
  })
  const name = useSelector((state)=>{
    return state.name;
  })
  const dispatch = useDispatch();


  useEffect(()=>{
    getcartItem()
 },[])

async function getcartItem(){
  const data = await axios.get('https://ecomerce-backend-mauve.vercel.app/api/cart',{
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`, 
    }
  } )
  console.log(data.data)
  const isLogin = await axios.get('https://ecomerce-backend-mauve.vercel.app/api/auth',{
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`, 
    }
  } )
 
  if(isLogin.data.name){
    dispatch(ChangeName(isLogin.data.name))
  }
  console.log(data.data)
  if(data.data != 'Invalid Token'){
   
    dispatch(getCartNo(data.data.length));
    dispatch(changeCartlist(data.data))
  }else{
    alert('You are not login')
  }
 
}



  async function menclick(){
    const data = await axios('https://ecomerce-backend-mauve.vercel.app/api/product/Men');
   
    dispatch(ChangeProductlist(data.data[0]))
  }
  async function womenclick(){
    const data = await axios('https://ecomerce-backend-mauve.vercel.app/api/product/Women');
 
    dispatch(ChangeProductlist(data.data[0]))
  }
  async function kidsclick(){
    const data = await axios('https://ecomerce-backend-mauve.vercel.app/api/product/Kids');
    console.log(data)
    dispatch(ChangeProductlist(data.data[0]))
  }
    return (
        <nav className="flex justify-around text-white py-4 items-center">
       <Link href="/"> <FaClock className="cursor-pointer mt-1 text-3xl"/></Link>
        <ul className="flex w-1/2 justify-around md:text-2xl">
          <Link href="/Men" className="cursor-pointer hover:underline  hover:text-green-600" onClick={menclick}>Men</Link>
          <Link href="/Women" className="cursor-pointer hover:underline  hover:text-green-600" onClick={womenclick}>Women</Link>
          <Link href="/Kids" className="cursor-pointer hover:underline  hover:text-green-600" onClick={kidsclick}>Kids</Link>
          
          
        </ul>
       <ul className="flex justify-around  w-1/6 md:text-3xl">
        <Link href="/Login" className="cursor-pointer flex flex-col"><VscAccount/><div className="text-xs">{name}</div></Link>
        <Link href="/Cart" className="flex items-center"><CiShoppingCart/><div className="text-xs relative md:right-9 bottom-3 bg-red-500 text-white md:p-1 md:px-2 rounded-full">{counter}</div></Link>
       </ul>
        </nav>
    )
}

export default Navbar;