import React from "react";
import DrumPad from "./DrumPad";
import "./DrumKeys.css";
import { KEYS } from "./keys";

export default class DrumKeys extends React.Component {
  constructor(props) {
    super(props);
    this.keys = KEYS;
  }

  render() {
    let drumKeys = this.keys.map(el => {
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
}
