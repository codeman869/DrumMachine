/* eslint-disable react/prop-types */
/* global document */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import playKey from '../actions'
import './DrumPad.css'

export function DrumPad(props) {
  useEffect(() => {
    function keyDown(e) {
      if (e.keyCode === props.charCode) {
        playKey()
      }
    }

    document.addEventListener('keydown', keyDown)

    return function cleanup() {
      document.removeEventListener('keydown', keyDown)
    }
  })

  const [clicked, setClicked] = useState(false)
  let audioRef = React.createRef()

  const showLight = () => {
    setClicked(!clicked)
  }

  const playKey = () => {
    audioRef.current.play()
    props.playKey(props.text)
  }

  return (
    <div
      className={clicked ? 'drum-pad pressed' : 'drum-pad'}
      id={props.text}
      onMouseDown={showLight}
      onMouseUp={showLight}
      onClick={playKey}
    >
      {props.id}
      <audio id={props.id} ref={audioRef} src={props.url} className="clip" />
    </div>
  )
}

export default connect(
  null,
  dispatch => {
    return {
      playKey: key => dispatch(playKey(key)),
    }
  }
)(DrumPad)
