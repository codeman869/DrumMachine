import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useState } from "react";
import DrumMachine from "./DrumMachine";
function App() {
  return <DrumMachine />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
