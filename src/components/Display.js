import React from 'react'
import { connect } from 'react-redux'
import './Display.css'

export default connect(store => {
  return { keyPlayed: store.keyPlayed }
})(function Display(props) {
  return <div id="display">{props.keyPlayed}</div>
})
