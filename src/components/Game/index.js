import React, { useState, useEffect } from "react";

import "./index.css";

import Canvas from "../Canvas";
import Sidenav from "../Sidenav";

import charactersData1 from "../../data/raid1.json";
import charactersData2 from "../../data/raid2.json";
import charactersData3 from "../../data/raid3.json";

const GAME_LIBRARY = {
  raid1: { data: charactersData1 },
  raid2: { data: charactersData2 },
  raid3: { data: charactersData3 },
};

function Game(props) {
  // TODO: Move the .json file from /src to Firebase Storage

  const { currentGame, goHome, goToHighscores, setGameOver } = props;
  const [characters, setCharacters] = useState(GAME_LIBRARY[currentGame].data);

  useEffect(() => {
    setCharacters(GAME_LIBRARY[currentGame].data);
  }, [currentGame]);

  return (
    <div className="canvas-container">
      <Sidenav
        characters={characters}
        goHome={goHome}
        goToHighscores={goToHighscores}
      />
      <Canvas
        characters={characters}
        currentImage={currentGame}
        setCharacters={setCharacters}
        setGameOver={setGameOver}
      />
    </div>
  );
}

export default Game;
