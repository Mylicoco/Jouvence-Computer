import Products from "./products";
import React from "react";
import { useSelector } from "react-redux";


export default function Body({items}){
   
    // const items=useSelector((state)=>state.itemReducer);
    
    return(
        <div className="container mx-auto px-20 py-10"> 
        <div className="text-2xl font-bold hover:underline cursor-pointer py-8 text-left">Our Products</div>  
<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
    {
        items.map((item)=>
               <Products item={item}/>
               )
        }
</div>

        </div>
    )
}