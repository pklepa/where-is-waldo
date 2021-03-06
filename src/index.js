import React from "react";
import ReactDOM from "react-dom";

import "./assets/styles/reset.css";

import "./assets/styles/global.css";
import "./assets/styles/fonts.css";

import GamePage from "./views/GamePage";

// TODO: Credit the artists of the image (Josan Gonzalez and Laurie Greasly)

function App() {
  return <GamePage />;
}

ReactDOM.render(<App />, document.getElementById("root"));
