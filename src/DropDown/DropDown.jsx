import React from "react";
import "./DropDown.css";
import { dropMenu } from "./data";
import { FaAngleDown } from "react-icons/fa6";
import SubMenu from "./SubMenu/SubMenu";

const DropDown = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <ul className="navigation">
          {dropMenu.map((menu, i) => (
            <li key={i} className="list_menu">
              <div className="nav_menu">
                <a href={menu.path}>{menu.title}</a>
                {menu.subMenu && (
                  <span className="menu_icon">
                    {" "}
                    <FaAngleDown />{" "}
                  </span>
                )}
              </div>
              {menu.subMenu && (
                <div className="sub_menu">
                  <SubMenu menu={menu} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default DropDown;
