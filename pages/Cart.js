import React, { useEffect, useState } from "react";
import { FaBlackTie } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Razorpay from "razorpay"
import axios from "axios";

const Cart = ()=>{
    const cartList = useSelector((state)=>{
        return state.cartlist
    })
    const [total,settotal] = useState(0)
    useEffect(()=>{
        getTotal()
        const loadRazorpayScript = () => {
            return new Promise((resolve) => {
              const script = document.createElement('script');
              script.src = 'https://checkout.razorpay.com/v1/checkout.js';
              script.onload = () => resolve(true);
              script.onerror = () => resolve(false);
              document.body.appendChild(script);
            });
          };
      
          loadRazorpayScript();
    })
    function getTotal(){
        let t = 0;
        cartList.map((elem)=>{
             t += (elem.qty*elem.price);
        })
        console.log(t)
        settotal(t)
    }


    const openrazorpay = (data)=>{
        const options = {
         key_id:'rzp_test_j9y9J7mpIATZVk',
         amount:Number(data.amount),
         currency:data.currency,
         name:'ecomerce9580',
         order_id:data.id,
         image:'Logo',
         handler:async function(response){
          let res = await axios.post('https://ecomerce-backend-mauve.vercel.app/api/order/verify',{response},{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`, 
            }
          } )
          if(res.data === 'sign valid')
           console.log(res.data)
            await axios.post('https://ecomerce-backend-mauve.vercel.app/api/order',{data:cartList,total_price:total},{
                headers:{
                  Authorization: `Bearer ${localStorage.getItem('token')}`, 
                }
              } )
           alert('Congratulation, Your order have successfully save');
         }
        };
        
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }






async function orderNow(){
     

    const orderRes = await axios.post(`https://ecomerce-backend-mauve.vercel.app/api/order/order`,{amount:total},{
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`, 
        }
      } )
      openrazorpay(orderRes.data)
     
}




    return (
       <div className="bg-black">
        <Navbar/>
        <div>
            <section>
                <center>
                    {cartList.map((elem)=>{
                        return <CartCard productData={elem}/>
                    })}
                    <h1 className="text-white text-3xl">total:${total}</h1>
                    <button className="bg-blue-500 p-2 text-white" onClick={orderNow}>Order Now</button>
                </center>
                 
            </section>
           
        </div>
        <Footer/>
       </div>
    )
}

export default Cart;