import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Body from "./Body";

function Dashboard() {
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

export default Dashboard;
