import superagent from "superagent";

let api = "https://api-js401.herokuapp.com/api/v1/categories";

// async action creator
export const getCategoryData = () => (dispatch) => {
  return superagent.get(api).then((response) => {
    console.log("DATA:", response.body);
    dispatch(getAction(response.body));
  });
};

export const getAction = (data) => {
  return {
    type: "GET",
    payload: data,
  };
};
