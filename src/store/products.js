let intialState = {
  products: [
    {
      name: "Ice Gun 2000",
      category: "electronics",
      description:
        "great against would-be assailants and people you dont like!",
      price: 2500,
      inventory: 5,
    },
    {
      name: "Supervillany for Dummies",
      category: "books",
      description: "start your journey to world domination today",
      price: 35,
      inventory: 3,
    },
  ],
  activeCat: "",
};

//reducer
const productReducer = (state = intialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "SET_CATEGORY":
      let selectedCat = payload;
      return { ...state, activeCat: selectedCat }; //productsToReturn;

    case "ADD_TO_CART":
      let products = state.products.map((prod) => {
        if (prod.name === payload.name) {
          return {
            name: prod.name,
            category: prod.category,
            description: prod.description,
            price: prod.price,
            inventory: prod.inventory - 1,
          };
        }
        return prod;
      });
      return { products: products };

    case "REMOVE_FROM_CART":
      let productsBeta = state.productsBeta.map((prod) => {
        if (prod.name === payload.name) {
          return {
            name: prod.name,
            category: prod.category,
            description: prod.description,
            price: prod.price,
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

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category,
  };
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeProductFromCart = (producr) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export default productReducer;
