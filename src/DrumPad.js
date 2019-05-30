import React, { useEffect } from "react";
import "./DrumPad.css";

export default function DrumPad(props) {
  useEffect(() => {
    function keyDown(e) {
      if (e.keyCode === props.charCode) {
        document.getElementById(props.id).play();
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
}
