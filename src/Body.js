import React from "react";
import "./Body.css";
import Header from "./Header";
import Widgets from "./Widgets";
import Chart from "./Chart";
import StickyHeadTable from "./StickyHeadTable";

function Body() {
  return (
    <div className="body">
      <Header />

      <Widgets />
      <Chart />
      <div className="table">
        <StickyHeadTable />
      </div>
    </div>
  );
}

export default Body;
