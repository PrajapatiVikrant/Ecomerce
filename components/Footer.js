import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Footer = ()=>{
    return (
     <>
      <div className="mt-20 text-white text-9xl flex justify-center"><FaClock/></div>
      <footer className="mt-20 text-white md:flex justify-around">
        <section className="p-4 border border-t-0 border-b-0 border-l-0" >
          <h2 className="font-bold text-2xl mb-7">Contact us</h2>
          <p className="flex"><FaHome/>520,West valey, Anim ad minim.</p>
          <p className="flex"><FaPhoneAlt/>+0000 123 - 456789</p>
          <p className="flex"> <MdEmail/>v@gmali.com </p>
        </section>
        <section className="p-4 border border-t-0 border-b-0 border-l-0" >
          <h2 className="font-bold text-2xl mb-7">Reach out to us</h2>
          <div className="flex text-2xl justify-around">
          <FaSquareWhatsapp className="cursor-pointer"/>
          <FaLinkedin className="cursor-pointer"/>
          <FaSquareInstagram className="cursor-pointer"/>
          <FaFacebookSquare className="cursor-pointer"/>
          </div>
        </section>
        <section className="p-4 w-52 border border-t-0 border-b-0 border-l-0" >
          <h2 className="font-bold text-2xl mb-7">About us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt harum aspernatur accusantium impedit perspiciatis veritatis quas, et debitis voluptate voluptatum nobis hic corporis ducimus aliquid! Nisi voluptas eaque reiciendis!</p>
        </section>
        <section className="p-2">
        <h2 className="font-bold text-2xl mb-7">Category</h2>
         <p className="hover:underline cursor-pointer">Men</p>
         <p className="hover:underline cursor-pointer">Women</p>
         <p className="hover:underline cursor-pointer">Kids</p>
        </section>
       
      </footer>
      </>
    )
}
export default Footer;