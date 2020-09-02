import React from 'react'

import './index.css'

function SelectionArea(props) {
  const {showSelection, x, y} = props;

  const position = {
    transform: `translate(${x}px, ${y}px)`,
  }

  return (
    <div className={`selection ${showSelection ? '' : 'hidden'}`} style={position}></div>
  )
}

export default SelectionArea