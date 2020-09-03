import React from "react";

import "./index.css";

import Image from "../Image";
import Sidenav from "../Sidenav";

function Canvas() {
  return (
    <div className="canvas-container">
      <Sidenav />
      <Image />
    </div>
  );
}

export default Canvas;
