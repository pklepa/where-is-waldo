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
          <button>
            <span>play_circle_fill</span>Play
          </button>

          <button>
            <span>poll</span>Highscores
          </button>
        </div>
      </div>

      {props.img}
    </div>
  );
}

export default ImagePreview;
