/*let intialState = {
  products: [
    /*{
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
};*/
import superagent from "superagent";
let intialState = { products: [], activeCat: "" };
let api = "https://api-js401.herokuapp.com/api/v1/products";
//reducer
const productReducer = (state = intialState, action) => {
  let { type, payload } = action;

  switch (type) {
    /**
     * case "GET_PROD":
     *   return payload;
     *
     *
     */

    case "GET_PRODS":
      return { ...state, products: payload.results };
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

export const getProducts = () => (dispatch) => {
  return superagent.get(api).then((response) => {
    console.log("DATA:", response.body);
    dispatch(getProds(response.body));
  });
};

export const getProds = (data) => {
  return {
    type: "GET_PRODS",
    payload: data,
  };
};

export default productReducer;
