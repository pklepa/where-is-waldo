import React, { useState } from "react";

import "./index.css";

import Canvas from "../Canvas";
import Sidenav from "../Sidenav";

import charactersData from "../../data/raid3.json";

function Game(props) {
  const [characters, setCharacters] = useState(charactersData);

  return (
    <div className="canvas-container">
      <Sidenav characters={characters} />
      <Canvas
        characters={characters}
        setCharacters={setCharacters}
        setGameOver={props.setGameOver}
      />
    </div>
  );
}

export default Game;
