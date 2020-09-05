import React from "react";

import "./index.css";

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

          <div
            className="character"
            onClick={() =>
              window.open(
                "https://www.imdb.com/title/tt0092455/characters/nm0000653?ref_=tt_cl_t5",
                "_blank"
              )
            }
          >
            <p>Data</p>
            <span>Star Trek: Next Generation (1987 ~ 1994)</span>
          </div>

          <div
            className="character"
            onClick={() =>
              window.open(
                "https://www.imdb.com/title/tt0103064/characters/nm0000411?ref_=tt_cl_t3",
                "_blank"
              )
            }
          >
            <p>John Connor</p>
            <span>The Terminator 2 (1991)</span>
          </div>
        </section>

        <hr />

        <section>
          <h2>Medium</h2>

          <div
            className="character"
            onClick={() =>
              window.open(
                "https://www.imdb.com/title/tt0133093/characters/nm0915989?ref_=tt_cl_t4",
                "_blank"
              )
            }
          >
            <p>Agent Smith</p>
            <span>The Matrix (1999)</span>
          </div>

          <div
            className="character"
            onClick={() =>
              window.open(
                "https://www.imdb.com/title/tt0076759/characters/nm0048652?ref_=tt_cl_t7",
                "_blank"
              )
            }
          >
            <p>R2-D2</p>
            <span>Star Wars (1977)</span>
          </div>
        </section>

        <hr />

        <section>
          <h2>Hard</h2>

          <div
            className="character"
            onClick={() =>
              window.open(
                "https://www.imdb.com/title/tt0375568/characters/nm0383603?ref_=tt_cl_t2",
                "_blank"
              )
            }
          >
            <p>Astroboy</p>
            <span>Astroboy (2009)</span>
          </div>

          <div
            className="character"
            onClick={() =>
              window.open(
                "https://www.imdb.com/title/tt0149460/characters/nm0224007?ref_=tt_cl_t2",
                "_blank"
              )
            }
          >
            <p>Bender</p>
            <span>Futurama (1999 ~ 2013)</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sidenav;
