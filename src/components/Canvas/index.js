import React, { useState } from 'react'

import './index.css'

import SelectionArea from '../SelectionArea'

function Canvas() {
  // TODO: It is preferred to have the start location of the circle to be the center of the image
  const [selectionX, setSelectionX] = useState(800)
  const [selectionY, setSelectionY] = useState(400)
  const [showSelection, setShowSelection] = useState(false)

  function handleClick(e) {
    if (!showSelection) setShowSelection(true)

    // Offset the click location in half the diameter of the SelectionArea circle in order to properly center itself
    setSelectionX(e.pageX - 50)
    setSelectionY(e.pageY - 50)
  }

  return (
    <div className="canvas-container" onClick={handleClick}>
      <SelectionArea showSelection={showSelection} x={selectionX} y={selectionY} />

      // TODO: Add Waldo Image
    </div>
  )
}

export default Canvas