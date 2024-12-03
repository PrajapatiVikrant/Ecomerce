import { useCallback, useEffect, useState } from 'react'
import Navbar from '../Navbar'



function Home() {

  return (
   <div className=' bg-black'>
   <Navbar/>
   <div className='flex  justify-around items-center'>
   <div className="p-4   text-white my-3 ">
        
    <h1 className='font-bold text-center text-2xl md:text-6xl'>THE WATCH EVERYONE <br /> DESIRE</h1>
    <p className='md:text-xl text-green-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit <br /> amet consectetur, adipisicing elit. Tempore, rem?</p>

   </div>
   <div className="hidden md:block">
        <img
         style={{height:"90vh",width:"400px"}}
         src="https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="watchimg"
          />
   </div>
   </div>
   </div>
  )
}

export default Home
