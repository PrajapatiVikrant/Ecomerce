import React, { useState } from "react";

const Category = ({name,list}) => {
    useState(()=>{
        console.log(list)
    },[])
    return (
        <div className="text-white">
            <h2 className="text-4xl m-7 text-center font-bold">{name}</h2>
            <ul className="md:flex overflow-auto border-4 justify-center items-center">
                {list.map((elem)=>{
                    return (
                        <li className="m-5 cursor-pointer">
                        <img 
                        style={{height:"200px",width:"350px"}}
                        src={elem.url} 
                        alt="Image"
                         />
                        <p className="text-center">{elem.name}</p>
                    </li>
                    )
                })}
               
                
            </ul>
        </div>
    )
}
export default Category;