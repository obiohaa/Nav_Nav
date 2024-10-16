import React from "react";

const SubMenu = ({ menu }) => {
  console.log(menu);
  return (
    <ul className="menu">
      {menu.subMenu.map((sub, i) => (
        <li key={i} className="menu_list">
          <div className="nav_menu">
            <a href={sub.path}>{sub.title}</a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
