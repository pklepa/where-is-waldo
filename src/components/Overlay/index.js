import React, { useState } from "react";

import "./index.css";

// TODO: Reintroduce the highscores and Endscreen pages

// TODO: Write a "Help" screen with info about the author and introctions

// TODO: Actually implement the other images Raid1 and raid2

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
