import React from "react";
import "./Widgets.css";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import EuroRoundedIcon from "@material-ui/icons/EuroRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
function Widgets() {
  return (
    <div className="Widgets">
      <div className="item1">
        <MonetizationOnIcon className="icon1" />
        <div className="price">
          <h1>$2,415</h1>
          <span className="price__detail">
            -11.4 <ArrowDownwardIcon className="arrow" />
          </span>
        </div>
        <p>Compared to this week</p>
      </div>
      <div className="item1">
        <EuroRoundedIcon className="icon2" />
        <div className="price">
          <h1>$2,415</h1>
          <span className="price__detail">
            -11.4 <ArrowDownwardIcon className="arrow" />
          </span>
        </div>
        <p>Compared to this week</p>
      </div>
      <div className="item1">
        <AccountBalanceRoundedIcon className="icon3" />
        <div className="price">
          <h1>$2,415</h1>
          <span className="price__detail">
            -11.4 <ArrowDownwardIcon className="arrow" />
          </span>
        </div>
        <p>Compared to this week</p>
      </div>
    </div>
  );
}

export default Widgets;
