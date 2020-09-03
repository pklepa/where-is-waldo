import React, { useState } from 'react'

import './index.css'

import Img from '../../assets/images/raid3.png'
import SelectionArea from '../SelectionArea'

function Image() {
  // TODO: It is preferred to have the start location of the circle to be the center of the image
  const [selectionX, setSelectionX] = useState(0)
  const [selectionY, setSelectionY] = useState(0)
  const [showSelection, setShowSelection] = useState(false)

  function handleClick(e) {
    if (!showSelection) setShowSelection(true)

    const position = getPosition(e);
    console.log(position)

    // Offset the click location in half the diameter of the SelectionArea circle in order to properly center itself
    setSelectionX(position.x - 50)
    setSelectionY(position.y - 50)
  }

  function getPosition(e) {
    var rect = e.target.getBoundingClientRect();
    var x = Math.round(e.clientX - rect.left);
    var y = Math.round(e.clientY - rect.top);

    return ( e.target.tagName === 'IMG') ? {x, y} : {x: x + selectionX, y: y+selectionY}
  }
  return (
    <div className="waldo-image" onClick={handleClick}>
      <img src={Img} alt=""/>

      <SelectionArea showSelection={showSelection} x={selectionX} y={selectionY} />
    </div>
  )
}

export default Image