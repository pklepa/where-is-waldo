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
        <p>You found all the characters in</p>
        <h2>14 min : 56 seconds</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" type="text" maxLength="20" />
          <button type="submit">Submit</button>
        </form>

        <p> &gt;&gt; Submit your name to see the highscores &lt;&lt; </p>
      </div>
    </div>
  );
}

export default GameOverPage;
