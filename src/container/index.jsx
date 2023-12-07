import { connect } from "react-redux";
import App from "../App";
import {
  addToCart,
  updateCart,
  RemoveFromCart,
  saveToLocalStorage,
} from "../actions/cart.action";

export const AppContainer = connect(
  function mapStateToProps(state) {
    return { items: state.items };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onSaveToLocalStorage: (items) => dispatch(saveToLocalStorage(items)),
    };
  }
)(App);
