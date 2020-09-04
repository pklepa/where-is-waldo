import React, { useState, useEffect } from "react";

import "./index.css";

import firebase from "../../firebase";

function GetHighscores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("raid3_highscores")
      .orderBy("time_in_seconds", "asc")
      .onSnapshot((snapshot) => {
        const newScores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setScores(newScores);
      });

    return () => unsubscribe();
  }, []);

  return scores;
}

function GameOverPage() {
  // TODO: Calculate the time elapsed since the start of the game

  // TODO: Add options buttons to restart current game, back to homepage or see highscores

  const highscores = GetHighscores();

  const [playerName, setPlayerName] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(123);

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
      });
  }

  return (
    <div className="overlay-container">
      <div className="overlay-content">
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

        <ol className="highscores">
          {highscores.map((score) => (
            <li key={score.id}>
              {score.player_name}
              <span>{score.time_in_seconds} seconds</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default GameOverPage;
