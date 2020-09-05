import React, { useState } from "react";

import "./index.css";

import firebase from "../../firebase";

function EndScreen(props) {
  // TODO: Calculate the time elapsed since the start of the game

  // TODO: Add options buttons to restart current game, back to homepage or see highscores

  const [playerName, setPlayerName] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(123);

  const { setShowHighscores } = props;

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("raid3_highscores")
      .add({
        player_name: playerName || "Anonymous",
        time_in_seconds: timeElapsed,
      })
      .then(() => {
        setPlayerName("");
        setShowHighscores(true);
      });
  }

  return (
    <div className="endScreen-container">
      <h1>Well done!</h1>
      <p>You found all the characters in</p>
      <h2>14 min : 56 seconds</h2>

      <form onSubmit={onSubmit}>
        <input
          placeholder="Your name"
          type="text"
          maxLength="20"
          value={playerName}
          onChange={(e) => setPlayerName(e.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <p> &gt;&gt; Submit your name to see the highscores &lt;&lt; </p>
    </div>
  );
}

export default EndScreen;
