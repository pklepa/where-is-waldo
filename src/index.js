import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/global.css";
import "./assets/styles/fonts.css";

import GamePage from "./views/GamePage";

function App() {
  return <GamePage />;
}

ReactDOM.render(<App />, document.getElementById("root"));
