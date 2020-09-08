import React, { useState, useEffect } from "react";

import "./index.css";

import Game from "../../components/Game";
import GameOverPage from "../GameOverPage";

function GamePage() {
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState("");

  function isGameOver(value) {
    window.scrollTo(0, 0);
    setGameOver(value);
  }

  useEffect(() => {
    const currentTime = new Date();

    setStartTime(currentTime);
  }, []);

  return (
    <div className="page-container">
      <Game setGameOver={isGameOver} />

      {gameOver ? <GameOverPage startTime={startTime} /> : ""}
    </div>
  );
}

export default GamePage;
