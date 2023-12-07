import axios from "axios";

export const GET_ITEMS = "GET_ITEMS";
export const getItems = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3001/data").then((res) => {
      dispatch({ type: GET_ITEMS, payload: res.data });
    });
  };
};
