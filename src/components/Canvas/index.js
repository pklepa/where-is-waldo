import React from "react";

import "./index.css";

import Image from "../Image";
import Sidenav from "../Sidenav";

function Canvas(props) {
  return (
    <div className="canvas-container">
      <Sidenav />
      <Image setGameOver={props.setGameOver} />
    </div>
  );
}

export default Canvas;
