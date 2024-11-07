import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {

    return (
        <div className="bg-black">
            <Navbar/>
           <Form  type='Login' />
            <Footer/>
        </div>

    )

}
export default Login;