import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products.js";
import categoryReducer from "./categories.js";
import cartReducer from "./cart.js";
//import products from "./products.js";
let reducers = combineReducers({
  categoryReducer,
  productReducer,
  cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
