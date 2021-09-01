import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Player() {
  return (
    <div className="player">
      <div className="player_body">
        {/* sidebar */}
        <Sidebar />
        {/* body */}
        <Body />
      </div>
    </div>
  );
}

export default Player;
