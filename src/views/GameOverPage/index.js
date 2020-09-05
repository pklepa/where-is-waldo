import React, { useState } from "react";

import "./index.css";

import EndScreen from "../../components/EndScreen";
import HighscoresScreen from "../../components/HighscoresScreen";

function GameOverPage() {
  const [showHighscores, setShowHighscores] = useState(true);

  return (
    <div className="overlay">
      <div className="overlay-content">
        {showHighscores ? (
          <HighscoresScreen />
        ) : (
          <EndScreen setShowHighscores={setShowHighscores} />
        )}
      </div>
    </div>
  );
}

export default GameOverPage;
