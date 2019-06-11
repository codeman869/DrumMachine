import React, { useEffect, useState } from "react";
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
        props.playKey(props.id);
      }
    }

    document.addEventListener("keydown", keyDown);

    return function cleanup() {
      document.removeEventListener("keydown", keyDown);
    };
  });

  const [clicked, setClicked] = useState(false);

  const showLight = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={clicked ? "drum-pad pressed" : "drum-pad"}
      onMouseDown={showLight}
      onMouseUp={showLight}
    >
      {props.id}
      <audio id={props.id} src={props.url} className="clip" />
    </div>
  );
});
