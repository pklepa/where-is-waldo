import React from "react";

import "./index.css";

function Sidenav(props) {
  // TODO: Make a modal popup warning that in clicking the home or highscores buttons will reset the timer

  const { characters, goHome, goToHighscores } = props;

  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <header>
          <h1>
            sci-fi<strong>nd</strong>
          </h1>
        </header>

        <div className="toolbar">
          <button onClick={goHome}>
            <span>home</span>
          </button>
          <button onClick={goToHighscores}>
            <span>poll</span>
          </button>
          <button>
            <span>help</span>
          </button>
        </div>

        <section>
          <h2>Easy</h2>

          {characters
            .filter((character) => character.difficulty === "easy")
            .map((character) => {
              return (
                <div
                  key={character.name}
                  className={`character ${character.found ? "found" : ""}`}
                  onClick={() => window.open(character.url, "_blank")}
                >
                  <p>{character.name}</p>
                  <span>{character.film}</span>
                </div>
              );
            })}
        </section>

        <hr />

        <section>
          <h2>Medium</h2>

          {characters
            .filter((character) => character.difficulty === "medium")
            .map((character) => {
              return (
                <div
                  key={character.name}
                  className={`character ${character.found ? "found" : ""}`}
                  onClick={() => window.open(character.url, "_blank")}
                >
                  <p>{character.name}</p>
                  <span>{character.film}</span>
                </div>
              );
            })}
        </section>

        <hr />

        <section>
          <h2>Hard</h2>

          {characters
            .filter((character) => character.difficulty === "hard")
            .map((character) => {
              return (
                <div
                  key={character.name}
                  className={`character ${character.found ? "found" : ""}`}
                  onClick={() => window.open(character.url, "_blank")}
                >
                  <p>{character.name}</p>
                  <span>{character.film}</span>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
}

export default Sidenav;
