import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { Avatar } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ShowChartIcon from "@material-ui/icons/ShowChart";
function Sidebar() {
  return (
    <div className="sideBar">
      <div className="title">
        <h1>
          Dash <span className="subtitle">Board</span>
        </h1>
      </div>
      <div className="user">
        <Avatar src="PhotoRoom-20210816_234818-01.jpeg" className="img" />
        <h3>Ayan Khan</h3>
        <p>Product Manager</p>
      </div>

      <hr />
      <div className="sidebar">
        <SidebarOption title="Home" Icon={HomeIcon} />
        <SidebarOption title="Search" Icon={SearchIcon} />
        <SidebarOption title="Report" Icon={AssessmentIcon} />
        <SidebarOption title="Receipt" Icon={ReceiptIcon} />
        <SidebarOption title="Balance" Icon={AccountBalanceIcon} />
        <SidebarOption title="Analytics" Icon={ShowChartIcon} />
        <br />
      </div>
    </div>
  );
}

export default Sidebar;
