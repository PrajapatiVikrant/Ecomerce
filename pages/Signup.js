import React from "react";
import Form from "../components/Form";

import Footer from "../components/Footer";

const Signup = () => {

    return (
        <div className="bg-black">
           
           <Form  type='Sign up' demoEmail='' demoPassword = '' />
            <Footer/>
        </div>

    )

}
export default Signup;