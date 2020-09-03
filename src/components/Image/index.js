import React, { useState, useEffect } from "react";

import "./index.css";

import Img from "../../assets/images/raid3.png";
import SelectionArea from "../SelectionArea";

function Image() {
  // TODO: It is preferred to have the start location of the circle to be the center of the image
  const [selectPosition, setSelectPosition] = useState({ x: 0, y: 0 });
  const [showSelection, setShowSelection] = useState(false);
  const [charactersFound, setCharactersFound] = useState([
    {
      name: "Data",
      found: false,
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
      found: false,
      x: 592,
      y: 142,
    },
    {
      name: "R2-D2",
      found: false,
      x: 209,
      y: 664,
    },
    {
      name: "Astroboy",
      found: false,
      x: 238,
      y: 1262,
    },
    {
      name: "Bender",
      found: false,
      x: 159,
      y: 407,
    },
  ]);

  function handleClick(e) {
    if (!showSelection) setShowSelection(true);

    const position = getPosition(e);

    // Offset the click location in half the diameter of the SelectionArea circle in order to properly center itself
    setSelectPosition({ x: position.x - 50, y: position.y - 50 });
  }

  function getPosition(e) {
    let rect = e.target.getBoundingClientRect();
    let x = Math.round(e.clientX - rect.left);
    let y = Math.round(e.clientY - rect.top);

    // Checks whether the click was directly on the image or onto the highlights circles. Adjust position accordingly
    if (e.target.id === "main-img") {
      return { x, y };
    } else if (e.target.id === "cursor") {
      return { x: x + selectPosition.x, y: y + selectPosition.y };
    } else {
      return { x: selectPosition.x + 50, y: selectPosition.y + 50 };
    }
  }

  useEffect(() => {
    charactersFound.forEach((char) => {
      if (selectPosition.x > char.x - 50 && selectPosition.x < char.x + 50) {
        if (selectPosition.y > char.y - 50 && selectPosition.y < char.y + 50) {
          char.found = true;
          setShowSelection(false);
        }
      }
    });
  }, [charactersFound, selectPosition]);

  return (
    <div className="image-container">
      <div className="image" onClick={handleClick}>
        <img src={Img} alt="" id="main-img" />

        <SelectionArea
          type={"cursor"}
          showSelection={showSelection}
          x={selectPosition.x}
          y={selectPosition.y}
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
