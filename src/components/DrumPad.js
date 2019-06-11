import React, { useEffect } from "react";
import { connect } from "react-redux";
import playKey from "../actions";
import "./DrumPad.css";

export default connect(
  null,
  dispatch => {
    return {
      playKey: key => dispatch(playKey(key))
    };
  }
)(function DrumPad(props) {
  useEffect(() => {
    function keyDown(e) {
      if (e.keyCode === props.charCode) {
        document.getElementById(props.id).play();
        props.playKey(props.id)
        console.log(`You pressed ${props.id}`);
      }
    }

    document.addEventListener("keydown", keyDown);

    return function cleanup() {
      document.removeEventListener("keydown", keyDown);
    };
  });

  return (
    <div className="drum-pad">
      {props.id}
      <audio id={props.id} src={props.url} className="clip" />
    </div>
  );
});
