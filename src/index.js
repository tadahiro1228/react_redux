import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    user: user
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
