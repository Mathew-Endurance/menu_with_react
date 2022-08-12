import React from "react";
import { links, social } from "./data";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <ul className="social-icons">
        {social.map((social_icon) => {
          const { id, url, icon } = social_icon;
          return (
            <li key={id}>
              <a href="{url}">{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
