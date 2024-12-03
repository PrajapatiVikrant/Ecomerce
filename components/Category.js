import React, { useState } from "react";

const Category = ({name,list}) => {
    useState(()=>{
        console.log(list)
    },[])
    return (
        <div className="text-white">
            <h2 className="text-4xl m-7 text-center font-bold">{name}</h2>
            <ul className="md:flex overflow-auto  justify-center items-center">
                {list.map((elem)=>{
                    return (
                        <li className="m-5  cursor-pointer">
                            <center>
                        <img 
                        style={{height:"200px",width:"350px"}}
                        src={elem.url} 
                        alt="Image"
                         />
                         </center>
                        <p className="text-center">{elem.name}</p>
                    </li>
                    )
                })}
               
                
            </ul>
        </div>
    )
}
export default Category;