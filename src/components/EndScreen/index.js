import React, { useState } from "react";

import "./index.css";

import firebase from "../../firebase";
import differenceInSeconds from "date-fns/differenceInSeconds";
import intervalToDuration from "date-fns/intervalToDuration";

function EndScreen(props) {
  // TODO: Add options buttons to restart current game, back to homepage or see highscores

  const [playerName, setPlayerName] = useState("");
  const [timeElapsed, setTimeElapsed] = useState("");
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState("");

  const { startTime, goToHighscores, currentGame } = props;

  useState(() => {
    const endTime = new Date();

    setTimeElapsedInSeconds(differenceInSeconds(endTime, startTime));

    setTimeElapsed(
      intervalToDuration({
        start: startTime,
        end: endTime,
      })
    );
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection(`${currentGame}_highscores`)
      .add({
        player_name: playerName || "Anonymous",
        elapsedTime: timeElapsed,
        time_in_seconds: timeElapsedInSeconds,
      })
      .then(() => {
        setPlayerName("");
        goToHighscores();
      });
  }

  return (
    <div className="endScreen-container">
      <h1>Well done!</h1>
      <p>You found all the characters in</p>
      <h2>{`${timeElapsed.hours ? timeElapsed.hours + "h " : ""}
      ${timeElapsed.minutes ? timeElapsed.minutes + "min " : ""}
      ${timeElapsed.seconds ? timeElapsed.seconds + "s" : ""}`}</h2>

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
