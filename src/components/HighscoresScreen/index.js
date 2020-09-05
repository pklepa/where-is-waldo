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

function HighscoresScreen() {
  const highscores = GetHighscores();
  const podium = ["first", "second", "third"];

  return (
    <div className="highscores-container">
      <h1>Highscores</h1>

      <ol className="highscores">
        {highscores.map((score) => {
          return (
            <li
              className={podium.length > 0 ? podium.shift() + " podium" : ""}
              key={score.id}
            >
              {score.player_name}
              <span>{score.time_in_seconds} seconds</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default HighscoresScreen;
