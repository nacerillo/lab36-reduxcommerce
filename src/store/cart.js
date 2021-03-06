let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;
  let cart = state.cart;
  switch (type) {
    case "ADD_TO_CART":
      cart.push(payload);

      return { cart };

    case "REMOVE_FROM_CART":
      let index = cart.indexOf(payload);
      if (index > -1) {
        cart.splice(index, 1);
      }
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

export const removeProductFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export default cartReducer;
