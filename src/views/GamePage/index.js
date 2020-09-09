import React, { useState } from "react";

import "./index.css";

import Game from "../../components/Game";
import Overlay from "../../components/Overlay";

function GamePage() {
  const [overlayStatus, setOverlayStatus] = useState("home");
  const [currentGame, setCurrentGame] = useState("raid3");

  const [startTime, setStartTime] = useState(new Date());

  useState(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <Game
        currentGame={currentGame}
        setGameOver={() => {
          window.scrollTo(0, 0);
          setOverlayStatus("gameover");
        }}
        goHome={() => {
          window.scrollTo(0, 0);
          setOverlayStatus("home");
        }}
        goToHighscores={() => {
          window.scrollTo(0, 0);
          setOverlayStatus("highscores");
        }}
      />

      {overlayStatus !== "hidden" && (
        <Overlay
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
          overlayStatus={overlayStatus}
          setOverlayStatus={setOverlayStatus}
          startTime={startTime}
          setStartTime={setStartTime}
        />
      )}
    </div>
  );
}

export default GamePage;
