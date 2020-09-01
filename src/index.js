import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/global.css'

import Canvas from './components/Canvas'

function App() {
  return (
    <Canvas />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))