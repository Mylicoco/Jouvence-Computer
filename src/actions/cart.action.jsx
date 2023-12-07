import axios from "axios";
export const actions = {
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART",
  REMOVE_FROM_CART: " REMOVE_FROM_CART",
  SAVE_TO_LOCAL_STORAGE:"SAVE_TO_LOCAL_STORAGE",
 
};

const uid =()=> Math.random().toString(34).slice(2);


export function addToCart(item,qty){
    return{
        
        type:actions.ADD_TO_CART,
        payload:{id:uid(),qty:qty,details:item}
    }
}
export function updateCart(id,qty){
    return{
        type:actions.UPDATE_CART,
        payload:{id:id,qty:qty}
    }
}
export function RemoveFromCart(id){
    return{
        type:actions.REMOVE_FROM_CART,
        payload:id
    }
}

export function saveToLocalStorage(item) {
  return {
    type: actions.SAVE_TO_LOCAL_STORAGE,
    payload: item,
  };
}

