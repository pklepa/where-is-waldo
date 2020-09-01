import React from 'react'

import './index.css'

function SelectionArea(props) {
  const {showSelection, x, y} = props;

  const position = {
    left: x,
    top: y,
  }

  return (
    <div className={`selection ${showSelection ? '' : 'hidden'}`} style={position}></div>
  )
}

export default SelectionArea