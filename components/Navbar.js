import { FaClock } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ChangeProductlist } from "../state/Slice/ProductsDisplaySlice";
import { getCartNo } from "../state/Slice/CartCountSlice";
import { ChangeName } from "../state/Slice/NameSlice";
import { changeCartlist } from "../state/Slice/CartSlice";
import { useRouter } from "next/navigation";


export async function getCartItem(dispatch, setIsLoggedIn) {


  try {
    const data = await axios.get("https://ecomerce-backend-two.vercel.app/api/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });



    if (data.data !== "Invalid Token") {
      dispatch(getCartNo(data.data.length));
      dispatch(changeCartlist(data.data));
    }
  } catch (err) {

    console.log("Error fetching user/cart:", err);
  
  }
}

// ✅ Navbar component
const Navbar = () => {
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin()
    getCartItem(dispatch);
  }, []);
  async function checkLogin() {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      return;
    }
    const isLogin = await axios.get("https://ecomerce-backend-two.vercel.app/api/auth", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (isLogin.data.name) {
      dispatch(ChangeName(isLogin.data.name));
      setIsLoggedIn(true);
    }
  }
  async function menclick() {
    const data = await axios.get("https://ecomerce-backend-two.vercel.app/api/product/Men");
    dispatch(ChangeProductlist(data.data[0]));
  }

  async function womenclick() {
    const data = await axios.get("https://ecomerce-backend-two.vercel.app/api/product/Women");
    dispatch(ChangeProductlist(data.data[0]));
  }

  async function kidsclick() {
    const data = await axios.get("https://ecomerce-backend-two.vercel.app/api/product/Kids");
    dispatch(ChangeProductlist(data.data[0]));
  }

  return (
    <nav className="flex justify-around text-white py-4 items-center">
      <Link href="/">
        <FaClock className="cursor-pointer mt-1 text-3xl" />
      </Link>

      <ul className="flex w-1/2 justify-around md:text-2xl">
        <Link href="/Men" className="cursor-pointer hover:underline hover:text-green-600" onClick={menclick}>
          Men
        </Link>
        <Link href="/Women" className="cursor-pointer hover:underline hover:text-green-600" onClick={womenclick}>
          Women
        </Link>
        <Link href="/Kids" className="cursor-pointer hover:underline hover:text-green-600" onClick={kidsclick}>
          Kids
        </Link>
      </ul>

      <ul className="flex justify-around w-1/6 md:text-3xl">
        {isLoggedIn ? (
          <>
            <Link href="/Login" className="cursor-pointer flex flex-col mx-2 justify-center items-center">
              <VscAccount />
              <div className="text-xs">{name}</div>
            </Link>
            <Link href="/Cart" className="flex items-center relative">
              <CiShoppingCart />
              <div className="text-[5px] md:text-xs absolute right-[-12px] bottom-3 bg-red-500 text-white p-1 px-2 rounded-full">
                {counter}
              </div>
            </Link>
          </>
        ) : (
          <Link href="/Login" className="cursor-pointer text-lg bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md">
            Sign In
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
