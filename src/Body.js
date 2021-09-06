import React from "react";
import "./Body.css";
import Header from "./Header";
import Widgets from "./Widgets";
import Chart from "./Chart";
import List from "./List";

function Body() {
  return (
    <div className="body">
      <Header />

      <Widgets />
      <Chart />

      <List />
    </div>
  );
}

export default Body;
