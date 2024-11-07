import React from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {

    return (
        <div className="bg-black">
            <Navbar/>
           <Form  type='Sign up' demoEmail='' demoPassword = '' />
            <Footer/>
        </div>

    )

}
export default Signup;