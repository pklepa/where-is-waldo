import React, { useState } from "react";

import "./index.css";

import EndScreen from "../../components/EndScreen";
import HighscoresScreen from "../../components/HighscoresScreen";

function GameOverPage(props) {
  const [showHighscores, setShowHighscores] = useState(false);

  return (
    <div className="overlay">
      <div className="overlay-content">
        {showHighscores ? (
          <HighscoresScreen />
        ) : (
          <EndScreen
            startTime={props.startTime}
            setShowHighscores={setShowHighscores}
          />
        )}
      </div>
    </div>
  );
}

export default GameOverPage;
