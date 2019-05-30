import React, { useState } from "react";
import DrumKeys from "./DrumKeys";
import "./DrumMachine.css";

export default function DrumMachine() {
  return (
    <div id="drum-machine">
      <h6>Tempest</h6>
      <div id="display" />

      <DrumKeys />
    </div>
  );
}
