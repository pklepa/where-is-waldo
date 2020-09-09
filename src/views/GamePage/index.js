import React, { useState, useEffect } from "react";

import "./index.css";

import Game from "../../components/Game";
import Overlay from "../../components/Overlay";

function GamePage() {
  const [overlay, setOverlay] = useState(true);
  const [showHighscores, setShowHighscores] = useState(false);
  const [startTime, setStartTime] = useState(
    new Date(2018, 11, 24, 10, 33, 30, 0)
  );

  function isGameOver(value) {
    window.scrollTo(0, 0);
    setOverlay(value);
  }

  useEffect(() => {
    const currentTime = new Date();

    setStartTime(currentTime);
  }, []);

  return (
    <div className="page-container">
      <Game
        setGameOver={isGameOver}
        setShowHighscores={(val) => {
          setOverlay(true);
          setShowHighscores(val);
        }}
      />

      {overlay ? (
        <Overlay
          startTime={startTime}
          showHighscores={showHighscores}
          setShowHighscores={setShowHighscores}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default GamePage;
