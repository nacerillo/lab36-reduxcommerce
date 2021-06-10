let intialState = {
  products: [
    {
      name: "Ice Gun 2000",
      category: "electronics",
      description:
        "great against would-be assailants and people you dont like!",
      price: 2500,
      inventory: 5,
      isActive: true,
    },
    {
      name: "Supervillany for Dummies",
      category: "books",
      description: "start your journey to world domination today",
      price: 35,
      inventory: 3,
      isActive: true,
    },
  ],
  activeCat: "",
};

//reducer
const productReducer = (state = intialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":
      let selectedCat = payload;

      return { ...state, activeCat: selectedCat }; //productsToReturn;

    case "ADD_TO_CART":
      let products = state.products.map((prod) => {
        if (prod.name === payload.name) {
          return {
            ...prod,
            inventory: prod.inventory - 1,
          };
        }
        return prod;
      });
      return { products: products };

    case "REMOVE_FROM_CART":
      let productsBeta = state.products.map((prod) => {
        if (prod.name === payload.name) {
          return {
            ...prod,
            inventory: prod.inventory + 1,
          };
        }
        return prod;
      });
      return { products: productsBeta };

    default:
      return state;
  }
};

export const selectCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
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

export default productReducer;
