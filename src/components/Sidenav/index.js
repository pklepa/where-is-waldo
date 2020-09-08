import React from "react";

import "./index.css";

function Sidenav(props) {
  // TODO: Add a toolbar with icons for Help, Highscores and Back to menu

  const { characters } = props;

  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <header>
          <h1>
            sci-fi<strong>nd</strong>
          </h1>
        </header>

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
