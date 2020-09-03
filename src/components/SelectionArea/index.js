import React from "react";

import "./index.css";

function SelectionArea(props) {
  const { name, type, showSelection, x, y } = props;

  const style = {
    transform: `translate(${x}px, ${y}px)`,
  };

  return (
    <div
      className={`selection ${showSelection ? "" : "hidden"} ${
        type === "cursor" ? "" : "static"
      } `}
      style={style}
      id={type === "cursor" ? "cursor" : ""}
    >
      <p>{name}</p>
    </div>
  );
}

export default SelectionArea;
