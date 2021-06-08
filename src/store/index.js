import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products.js";
import categoryReducer from "./categories.js";
//import products from "./products.js";
let reducers = combineReducers({ categoryReducer, productReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
