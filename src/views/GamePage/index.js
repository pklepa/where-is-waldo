import React, { useState } from "react";

import "./index.css";

import Game from "../../components/Game";
import Overlay from "../../components/Overlay";

function GamePage() {
  const [overlayStatus, setOverlayStatus] = useState("home");
  const [gameStart, setGameStart] = useState(false);

  const [startTime, setStartTime] = useState(
    new Date(2018, 11, 24, 10, 33, 30, 0)
  );

  return (
    <div className="page-container">
      <Game
        setGameOver={() => {
          window.scrollTo(0, 0);
          setOverlayStatus("gameover");
        }}
        goHome={() => {
          setOverlayStatus("home");
        }}
        goToHighscores={() => {
          setOverlayStatus("highscores");
        }}
      />

      {overlayStatus !== "hidden" && (
        <Overlay
          overlayStatus={overlayStatus}
          setOverlayStatus={setOverlayStatus}
          startTime={startTime}
        />
      )}
    </div>
  );
}

export default GamePage;
