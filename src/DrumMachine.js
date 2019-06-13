import React from 'react'
import DrumKeys from './components/DrumKeys'
import Display from './components/Display'
import './DrumMachine.css'

export default function DrumMachine(props) {
  return (
    <div id="drum-machine" className="box">
      <div className="title">
        <h6>Tempest</h6>
      </div>
      <div className="displayBackground">
        <Display />
        Studio Quality
      </div>
      <DrumKeys />
    </div>
  )
}
