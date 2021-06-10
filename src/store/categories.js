/*let categoryState = {
  categories: [
    {
      name: "electronics",
      displayName: "Electronics",
      description: "these are all hardware and software needs",
    },
    {
      name: "books",
      displayName: "Books",
      description: "Novels, comics, and manuals!",
    },
  ],
 
};*/
import superagent from "superagent";
import { thunk } from "redux-thunk";
let categoryState = { categories: [], activeCat: "" };
let api = "https://api-js401.herokuapp.com/api/v1/categories";

//reducer
const categoryReducer = (state = categoryState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":
      let activeCat = payload;
      console.log(activeCat);

      return { ...state, activeCat };

    case "GET_CAT":
      return payload;

    default:
      return state;
  }
};

/**/
export const selectCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
};

export const getCategories = () => (dispatch) => {
  return superagent.get(api).then((response) => {
    console.log("DATA:", response.body.results);
    dispatch(getCat(response.body.results));
  });
};

const getCat = (data) => {
  return {
    type: "GET_CAT",
    payload: data,
  };
};
export default categoryReducer;
