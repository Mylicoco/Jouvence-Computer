

import { json } from "react-router-dom";

import { actions } from "../actions/cart.action";

const saveToLocalStorage =(Object) => {
  localStorage.setItem("items", JSON.stringify(Object));
 
};
const initialState = {
  items: JSON.parse(localStorage.getItem("items"))!==null ? JSON.parse(localStorage.getItem("items")) :[],
};



export default function onlineStoreApp(state = initialState, action) {
  switch (action.type) {
    //    case actions.GET_ITEMS:
    // //   return action.payload;
    // return Object.assign({}, state.onlineStoreApp, {
    //     items: [ action.payload],
    //   });
    case actions.ADD_TO_CART:
      return Object.assign({}, state, {
        items: [...state.items, action.payload],
      });
    case actions.UPDATE_CART:
      return Object.assign({}, state, {
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? Object.assign({}, item, { qty: action.payload.qty })
            : item;
        }),
      });
    case actions.REMOVE_FROM_CART:
      return Object.assign({}, state.onlineStoreApp, {
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      });
    case actions.SAVE_TO_LOCAL_STORAGE:
    saveToLocalStorage(action.payload)
      return state;
    default:
      return state;
  }
}


