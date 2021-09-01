import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search User" />
      </div>
      <div className="header__right">
        <Avatar src="PhotoRoom-20210816_234818-01.jpeg" />
        <h4>
          Hello<p>Ayan khan</p>
        </h4>
      </div>
    </div>
  );
}

export default Header;
