import React, { useState } from "react";
import DrumKeys from "./DrumKeys";
import Display from "./Display";
import "./DrumMachine.css";

export default function DrumMachine() {
  return (
    <div id="drum-machine" className="box">
      <div className="title">
        <h6>Tempest</h6>
      </div>
      <Display />
      <DrumKeys />
    </div>
  );
}
