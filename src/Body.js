import React from "react";
import "./Body.css";
import Header from "./Header";
import Widgets from "./Widgets";
import Chart from "./Chart";

function Body() {
  return (
    <div className="body">
      <Header />

      <Widgets />
      <Chart />
    </div>
  );
}

export default Body;
