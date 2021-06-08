let categoryState = {
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
  activeCat: "",
};

//reducer
const categoryReducer = (state = categoryState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "SELECT_CATEGORY":
      let activeCat = payload;
      console.log(activeCat);
      return { ...state, activeCat };
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

export default categoryReducer;
//export defualt productReducer;
