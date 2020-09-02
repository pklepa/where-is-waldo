import React, { useState } from 'react'

import './index.css'

import SelectionArea from '../SelectionArea'

function Canvas() {
  const [selectionX, setSelectionX] = useState(800)
  const [selectionY, setSelectionY] = useState(400)
  const [showSelection, setShowSelection] = useState(false)

  function handleClick(e) {
    if (!showSelection) setShowSelection(true)

    setSelectionX(e.pageX - 50)
    setSelectionY(e.pageY - 50)
  }

  return (
    <div className="canvas-container" onClick={handleClick}>
      <SelectionArea showSelection={showSelection} x={selectionX} y={selectionY} />
    </div>
  )
}

export default Canvas