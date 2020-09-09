import React from "react";

import "./index.css";

// TODO: Write a "Help" screen with info about the author and introctions

// TODO: Actually implement the other images Raid1 and raid2

import EndScreen from "../../components/EndScreen";
import HighscoresScreen from "../../components/HighscoresScreen";
import HomeScreen from "../HomeScreen";

function Overlay(props) {
  const {
    overlayStatus,
    setOverlayStatus,
    startTime,
    setStartTime,
    currentGame,
    setCurrentGame,
  } = props;

  function currentScreen() {
    switch (overlayStatus) {
      case "home":
        return (
          <HomeScreen
            goToHighscores={() => {
              setOverlayStatus("highscores");
            }}
            startGame={(val) => {
              setStartTime(new Date());
              setCurrentGame(val);
              setOverlayStatus("hidden");
            }}
          />
        );
      case "highscores":
        return (
          <HighscoresScreen
            currentGame={currentGame}
            goHome={() => {
              setOverlayStatus("home");
            }}
          />
        );
      case "gameover":
        return (
          <EndScreen
            startTime={startTime}
            currentGame={currentGame}
            goToHighscores={() => {
              setOverlayStatus("highscores");
            }}
          />
        );
      default:
        break;
    }
  }

  return (
    <div className="overlay">
      <div className="overlay-content">{currentScreen()}</div>
    </div>
  );
}

export default Overlay;
