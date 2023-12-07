// export default function Modal(){
//     return(
//         <div>
        
//         </div>
//     )
// }
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cart.action";


export default function Modal({item}){
    // const items=useSelector(state=>state.items)
    const [showModal, setShowModal] = useState(true);

  const [qty, setqty] = useState(1);
   const dispatch = useDispatch();
    

  const add=(item,Qty)=>{
    dispatch(addToCart(item,qty));
  }
    return(
        <div>
        
        <button   
              onClick={() => setShowModal(true)}
data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Add to cart
        </button>

{showModal?(<div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
            <h1 className="text-xl font-bold underline text-left flex pb-4">Description</h1>
               <h2>{item.description}</h2>
                <div class="flex items-center  -mx-8 px-6 py-5">
          <div class="flex w-2/5">
           {/* <!-- product --> */}
            <div class="w-20">
              <img class="h-24" src="4.jpeg" alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{item.name}</span>
              <span class="text-red-500 text-xs">in stock</span>
              <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">{item.price}XAF</a>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
           
                    <button onClick={() => { setqty(qty > 1 ? qty - 1 : 1)}}> <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg></button>
            <input class="mx-2 border text-center w-8" type="text" value={qty}/>
            <button onClick={() => {setqty(qty + 1)}} 
><svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg></button>
            
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">{item.price*qty}XAF</span>
        </div>
                <button
                                    onClick={() => add(item,qty)}

                 data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                  <a href="#">Add to cart</a> 
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
            </div>
        </div>
    </div>
</div>):null}

        </div>
    )
}