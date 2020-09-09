import React, { useState, useEffect } from "react";

import "./index.css";

import firebase from "../../firebase";

// TODO: Limit the number of names to display to a maximum of 10 (?)

const NAME_LIBRARY = {
  raid1: "The Raid",
  raid2: "Incident on Line 13",
  raid3: "Scourge of the Machines",
};

function GetHighscores(currentGame) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(`${currentGame}_highscores`)
      .orderBy("time_in_seconds", "asc")
      .onSnapshot((snapshot) => {
        const newScores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setScores(newScores);
      });

    return () => unsubscribe();
  }, [currentGame]);

  return scores;
}

function HighscoresScreen(props) {
  const { currentGame } = props;
  const highscores = GetHighscores(currentGame);
  const podium = ["first", "second", "third"];

  return (
    <div className="highscores-container">
      <h1>Highscores</h1>
      <h2>{NAME_LIBRARY[currentGame]}</h2>

      <ol className="highscores">
        {highscores.map((score) => {
          return (
            <li
              className={podium.length > 0 ? podium.shift() + " podium" : ""}
              key={score.id}
            >
              {score.player_name}

              <span>{`${
                score.elapsedTime.hours ? score.elapsedTime.hours + "h" : ""
              } ${
                score.elapsedTime.minutes
                  ? score.elapsedTime.minutes + "min"
                  : ""
              } ${
                score.elapsedTime.seconds ? score.elapsedTime.seconds + "s" : ""
              }`}</span>
            </li>
          );
        })}
      </ol>

      <button onClick={props.goHome}>home</button>
    </div>
  );
}

export default HighscoresScreen;
