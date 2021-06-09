let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      let cart = state.cart;
      cart.push(payload);

      return { cart };

    default:
      return state;
  }
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

/**
 *
 * export const removeProductFromCart = (product) => {
 *  return {
 *      type: "REMOVE_FROM_CART",
 *      payload: product
 *  };
 * };
 */

export default cartReducer;
