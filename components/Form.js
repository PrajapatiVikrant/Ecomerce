import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";
import { useDispatch } from "react-redux";
import { ChangeName } from "../state/Slice/NameSlice";

const Form = ({type,demoEmail,demoPassword})=>{
     const [name,setname] = useState('')
     const [email,setemail] =useState(demoEmail)
     const [password,setpassword] = useState(demoPassword)
     const router = useRouter();
     const dispatch = useDispatch(); 
  async function signup() {
    const data = await axios.post('https://ecomerce-backend-mauve.vercel.app/api/auth/signup',{name,email,password});
   
    if(data.data.token){
        localStorage.setItem('token',data.data.token)
        dispatch(ChangeName(data.data.message))
        router.push('/');
    }
    alert(`login as ${data.data.message}`)
   
   
  }
  async function login() {
    const data = await axios.post('https://ecomerce-backend-mauve.vercel.app/api/auth/login',{email,password});
   
    if(data.data.token){
        localStorage.setItem('token',data.data.token)
        dispatch(ChangeName(data.data.name))
        router.push('/');
    }
    alert(data.data.message);
  }
   return (
      <>
      
      <div className="flex justify-center">
        {(type=='Sign up')?(
           <div className="border p-3 flex flex-col md:w-1/3 mt-12">
           <h1 className="text-white  text-2xl  text-left underline">{type}</h1>
          <input className="my-5 text-white bg-black text-xl p-2 border" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your name" />
          <input className="my-5 text-white bg-black text-xl p-2 border" type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" />
          <input className="my-5 text-white bg-black text-xl p-2 border" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" />
          <button className="my-5 bg-red-400 text-white p-2 rounded-md" onClick={signup}>Sign up</button>
          <p className="text-white">If you already account <Link href='/Login' className="underline">Login</Link> </p>
          </div>
        ):(
            <div className="border p-3 flex flex-col md:w-1/3 mt-12">
            <h1 className="text-white  text-2xl  text-left underline">{type}</h1>
            <input className="my-5 text-white bg-black text-xl p-2 border" type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" />
            <input className="my-5 text-white bg-black text-xl p-2 border" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password" />
           <button className="my-5 bg-red-400 text-white p-2 rounded-md" onClick={login}>Login</button>
           <p className="text-white">If you have no account <Link href='/Signup' className="underline">Signup</Link> </p>
           </div>
        )}
      </div>
    
      </>
   )
    

}

export default Form;