import React from "react";
import { links, social } from "./data";

const Sidebar = () => {
  return (
    <div className="links-container show-container">
      <ul className="links">
        {links.map((nav_link) => {
          const { id, url, text } = nav_link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
