import React from "react";

import "./index.css";

function GameOverPage() {
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
