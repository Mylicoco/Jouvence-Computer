import { updateCart,RemoveFromCart } from "../actions/cart.action";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CartItem({item}){
    const {id, qty, details } = item;
  const [lqty, setqty] = useState(qty);
  const dispatch = useDispatch();
  
  const update = (lqty) => {
    dispatch(updateCart(id, lqty));
  };
  const remove = (id) => {
    dispatch(RemoveFromCart(id));
  };
  console.log(details)
 


    return(
        <div> 
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5 ">
           {/* <!-- product --> */}
            <div class="w-20 " >
              <img class="h-24" src="4.jpeg" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{details.name}</span>
              {/* <span class="text-red-500 text-xs">{details.name}</span> */}
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => {                 

                  remove(id)
                }}
>Remove</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3"  onClick={() => {
                  setqty(lqty > 1 ? lqty - 1 : 1);
                  update(lqty-1);
                }} viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input class="mx-2 border text-center w-8" type="text" value={lqty}/>

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"  onClick={() => {
                  setqty(lqty + 1);
                  update(qty+1);
                }}>
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm"> {details.price} frcs</span>
          <span class="text-center w-1/5 font-semibold text-sm">{(details.price * lqty).toFixed(2)} 
 frcs</span>
        </div>
        </div>
    )
}