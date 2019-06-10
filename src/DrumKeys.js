import React from "react";
import DrumPad from "./DrumPad";
import "./DrumKeys.css";
import { KEYS } from "./keys";

export default function DrumKeys() {
  let drumKeys = KEYS.map(el => {
    return (
      <DrumPad
        id={el.key}
        charCode={el.charCode}
        key={el.key}
        url={el.url}
        className="drum-pad"
      />
    );
  });

  return <div id="drum-keys">{drumKeys}</div>;
}
