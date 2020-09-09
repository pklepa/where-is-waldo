import React, { useState } from "react";

import "./index.css";

import Canvas from "../Canvas";
import Sidenav from "../Sidenav";

import charactersData from "../../data/raid3.json";

function Game(props) {
  // TODO: Move the .json file from /src to Firebase Storage

  const [characters, setCharacters] = useState(charactersData);

  return (
    <div className="canvas-container">
      <Sidenav
        characters={characters}
        setShowHighscores={props.setShowHighscores}
      />
      <Canvas
        characters={characters}
        setCharacters={setCharacters}
        setGameOver={props.setGameOver}
      />
    </div>
  );
}

export default Game;
