import {  useEffect, useState } from 'react'
import Home from '../components/Home/Home'
import Category from '../components/Category'
import Footer from '../components/Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { ChangeProductlist } from '../state/Slice/ProductsDisplaySlice'


function Index() {
 const [menWatchName, setmenWatchName] = useState('');
 const [menWatchList, setmenWatchList] = useState([]);
 const [womenWatchName, setwomenWatchName] = useState('');
 const [womenWatchList, setwomenWatchList] = useState([]);
 const [kidsWatchName, setkidsWatchName] = useState('');
 const [kidsWatchList, setkidsWatchList] = useState([]);
 const dispatch = useDispatch();

  useEffect(()=>{
     getdata();
  },[])
  async function getdata(){
    const data = await axios.get('https://ecomerce-backend-two.vercel.app/api/product/category');
   
    setmenWatchName(data.data.MenWatch.name)
    setmenWatchList(data.data.MenWatch.watch)
    setwomenWatchName(data.data.WomenWatch.name)
    setwomenWatchList(data.data.WomenWatch.watch)
    setkidsWatchName(data.data.KidsWatch.name)
    setkidsWatchList(data.data.KidsWatch.watch)
   
  }

  async function menclick(){
    const data = await axios.get('https://ecomerce-backend-two.vercel.app/api/product/Men');
    
    dispatch(ChangeProductlist(data.data[0]))
  }
  async function womenclick(){
    const data = await axios.get('https://ecomerce-backend-two.vercel.app/api/product/Women');
   
    dispatch(ChangeProductlist(data.data[0]))
  }
  async function kidsclick(){
    const data = await axios.get('https://ecomerce-backend-two.vercel.app/api/product/Kids');
   
    dispatch(ChangeProductlist(data.data[0]))
  }


  return (
  <div className=' bg-black'>
  <Home/>
  <Link href='/Men' onClick={menclick}><Category name={menWatchName} list={menWatchList}/></Link>
  <Link href='/Women' onClick={womenclick}><Category name={womenWatchName} list={womenWatchList}/></Link>
  <Link href='/Kids' onClick={kidsclick}><Category name={kidsWatchName} list={kidsWatchList}/></Link>
  
  
  
  
  <Footer/>
  
  </div>
  )
}

export default Index
