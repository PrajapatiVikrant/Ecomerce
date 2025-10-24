import { useCallback, useEffect, useState } from 'react'




function Home() {

  return (
   <div className=' bg-black'>
  
   <div className='flex  justify-around items-center'>
   <div className="p-4   text-white  mx-2 md:my-3 ">
        
    <h1 className='font-bold text-left text-4xl sm:text-6xl'>THE WATCH <br /> EVERYONE DESIRE</h1>
    

   </div>
   <div className="">
        <img
        className='h-[300pv]  lg:h-[90vh]'
        
         src="https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg?auto=compress&cs=tinysrgb&w=600"
         alt="watchimg"
          />
   </div>
   </div>
   </div>
  )
}

export default Home
