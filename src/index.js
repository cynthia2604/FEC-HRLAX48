import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import reducer, {
  initialState,
} from "../src/components/Overview/store/Reducer.jsx";
import { StateProvider } from "../src/components/Overview/store/StateProvider";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  mountNode
);
