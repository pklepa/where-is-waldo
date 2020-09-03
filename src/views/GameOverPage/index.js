import React from "react";

import "./index.css";

function GameOverPage() {
  // TODO: Calculate the time elapsed since the start of the game

  // TODO: Create a Form to take player's name to push to highscores

  // TODO: Add options buttons to restart current game, back to homepage or see highscores

  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <h1>Well done!</h1>
        <p>You found all the characters in XX minutes and YY seconds</p>
      </div>
    </div>
  );
}

export default GameOverPage;
