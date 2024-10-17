import React, { useState } from "react";
import "./DropDown.css";
import { dropMenu } from "./data";
import { FaAngleDown, FaBars, FaXmark } from "react-icons/fa6";
import SubMenu from "./SubMenu/SubMenu";

const DropDown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className={`shadow ${openMenu && "active"}`} />
        <ul className={`navigation ${openMenu && "active"}`}>
          <span className="close_menu" onClick={() => setOpenMenu(false)}>
            <FaXmark />
          </span>
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
        <span className="bar_menu" onClick={() => setOpenMenu(true)}>
          <FaBars />
        </span>
      </div>
    </header>
  );
};

export default DropDown;
