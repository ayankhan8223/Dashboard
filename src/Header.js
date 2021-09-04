import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search Style" />
      </div>

      <div className="header__right">
        <div className="header__button">
          <AddIcon className="ikon" />
          <h4>
            Add <span className="add">Style</span>
          </h4>
        </div>
        <Avatar src="PhotoRoom-20210816_234818-01.jpeg" />
        <h4>
          Hello<p>Ayan khan</p>
        </h4>
      </div>
    </div>
  );
}

export default Header;
