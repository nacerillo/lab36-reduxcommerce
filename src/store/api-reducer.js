import superagent from "superagent";

let api = "https://api-js401.herokuapp.com/api/v1/todo";

// async action creator
export const getRemoteData = () => (dispatch) => {
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
