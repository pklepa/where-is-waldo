import React from "react";

import "./index.css";

// TODO: Link each character to its IMDb page with a photo for reference

// TODO: Cross character name when found

// TODO: Instead of hardcoding characters, map from the respective .json file

function Sidenav() {
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

          <div className="character">
            <p>Data</p>
            <span>Star Trek: Next Generation (1987 ~ 1994)</span>
          </div>

          <div className="character">
            <p>John Connor</p>
            <span>The Terminator (1984)</span>
          </div>
        </section>

        <hr />

        <section>
          <h2>Medium</h2>

          <div className="character">
            <p>Agent Smith</p>
            <span>The Matrix (1999)</span>
          </div>

          <div className="character">
            <p>R2-D2</p>
            <span>Star Wars (1977)</span>
          </div>
        </section>

        <hr />

        <section>
          <h2>Hard</h2>

          <div className="character">
            <p>Astroboy</p>
            <span>Astroboy (2009)</span>
          </div>

          <div className="character">
            <p>Bender</p>
            <span>Futurama (1999 ~ 2013)</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidenav;
