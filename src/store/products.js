let intialState = {
  products: [
    {
      name: "Ice Gun 2000",
      category: "electronics",
      description:
        "great against would-be assailants and people you dont like!",
      price: 2500,
    },
    {
      name: "Supervillany for Dummies",
      category: "books",
      description: "Novels, comics, and manuals!",
      price: 35,
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

export default productReducer;
