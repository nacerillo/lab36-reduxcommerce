import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app.js";

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<Entry />, root);
