import React, { useState } from "react";

import "./index.css";

import Img from "../../assets/images/raid3.png";
import SelectionArea from "../SelectionArea";

function Image() {
  // TODO: It is preferred to have the start location of the circle to be the center of the image
  const [selectionX, setSelectionX] = useState(0);
  const [selectionY, setSelectionY] = useState(0);
  const [showSelection, setShowSelection] = useState(false);
  const [charactersFound, setCharactersFound] = useState([
    {
      name: "Data",
      found: true,
      x: 717,
      y: 947,
    },
    {
      name: "John Connor",
      found: false,
      x: 778,
      y: 38,
    },
    {
      name: "Agent Smith",
      found: true,
      x: 592,
      y: 142,
    },
    {
      name: "R2-D2",
      found: true,
      x: 209,
      y: 664,
    },
    {
      name: "Astroboy",
      found: true,
      x: 238,
      y: 1262,
    },
    {
      name: "Bender",
      found: true,
      x: 159,
      y: 407,
    },
  ]);

  function handleClick(e) {
    if (!showSelection) setShowSelection(true);

    const position = getPosition(e);

    // Offset the click location in half the diameter of the SelectionArea circle in order to properly center itself
    setSelectionX(position.x - 50);
    setSelectionY(position.y - 50);
  }

  function getPosition(e) {
    var rect = e.target.getBoundingClientRect();
    var x = Math.round(e.clientX - rect.left);
    var y = Math.round(e.clientY - rect.top);

    if (e.target.id === "main-img") {
      return { x, y };
    } else if (e.target.id === "cursor") {
      return { x: x + selectionX, y: y + selectionY };
    } else {
      return { x: selectionX + 50, y: selectionY + 50 };
    }
  }

  return (
    <div className="image-container">
      <div className="image" onClick={handleClick}>
        <img src={Img} alt="" id="main-img" />

        <SelectionArea
          type={"cursor"}
          showSelection={showSelection}
          x={selectionX}
          y={selectionY}
        />

        {charactersFound.map((char) => {
          return (
            <SelectionArea
              type={"static"}
              key={char.name}
              name={char.name}
              showSelection={char.found}
              x={char.x}
              y={char.y}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Image;
