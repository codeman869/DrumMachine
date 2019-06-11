import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import DrumMachine from "./DrumMachine";
import store from "./store";

function App() {
  //  const [state, dispatch] = useReducer(reducer, initialState);

  return <DrumMachine />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
