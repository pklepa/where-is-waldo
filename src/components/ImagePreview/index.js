import React from "react";

import "./index.css";

function ImagePreview(props) {
  return (
    <div className="preview-container">
      <div className="preview-overlay">
        <h2>{props.title}</h2>
        <p>by</p>
        <h3>{props.author}</h3>

        <div className="buttons">
          <button onClick={props.startGame}>
            <span>play_circle_fill</span>Play
          </button>

          <button onClick={props.goToHighscores}>
            <span>poll</span>Highscores
          </button>
        </div>
      </div>

      {props.img}
    </div>
  );
}

export default ImagePreview;
