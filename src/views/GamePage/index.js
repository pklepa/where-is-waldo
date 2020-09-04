import React, { useState } from "react";

import "./index.css";

import Canvas from "../../components/Canvas";
import GameOverPage from "../GameOverPage";

function GamePage() {
  const [gameOver, setGameOver] = useState(true);

  function isGameOver(value) {
    window.scrollTo(0, 0);
    setGameOver(value);
  }

  return (
    <div className="page-container">
      <Canvas setGameOver={isGameOver} />

      {gameOver ? <GameOverPage /> : ""}
    </div>
  );
}

export default GamePage;
