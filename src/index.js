import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "./assets/styles/global.css";
import "./assets/styles/fonts.css";

import GamePage from "./views/GamePage";

// TODO: Maybe create a home-page to select multiple images

// TODO: Integrate Firebase to keep the highscores

// TODO: Credit the artists of the image (Josan Gonzalez and Laurie Greasly)

function App() {
  return <GamePage />;
}

ReactDOM.render(<App />, document.getElementById("root"));
