import React, { useState } from "react";

import "./index.css";

import EndScreen from "../../components/EndScreen";
import HighscoresScreen from "../../components/HighscoresScreen";
import HomeScreen from "../HomeScreen";

function Overlay(props) {
  const [showHome, setShowHome] = useState(true);
  const [showHighscores, setShowHighscores] = useState(
    props.showHighscores || false
  );

  return (
    <div className="overlay">
      <div className="overlay-content">
        {showHome && <HomeScreen />}

        {/* {showHighscores ? (
          <HighscoresScreen />
        ) : (
          <EndScreen
            startTime={props.startTime}
            setShowHighscores={setShowHighscores}
          />
        )} */}
      </div>
    </div>
  );
}

export default Overlay;
