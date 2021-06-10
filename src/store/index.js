import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./products.js";
import categoryReducer from "./categories.js";
import cartReducer from "./cart.js";
import thunk from "redux-thunk";
//import products from "./products.js";
let reducers = combineReducers({
  categoryReducer,
  productReducer,
  cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();

/**
 * import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { thunk } from 'redux-thunk'; - you can install this

import thunk from './middleware/thunk.js';
import reducer from './reducers.js';

let reducers = combineReducers({
    categoryReducer,
  productReducer,
  cartReducer,
});

const store = () => {
  console.log(createStore(reducers, applyMiddleware(thunk)));
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
};

export default store();
 */
