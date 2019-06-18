/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import './Display.css'

export function Display(props) {
  return <div id="display">{props.keyPlayed}</div>
}

export default connect(store => {
  return {
    keyPlayed: store.keyPlayed,
  }
})(Display)
