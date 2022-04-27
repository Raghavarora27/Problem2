import React from "react";
import "./Header.css";
import Logo from "./Assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} height={70} className="left" alt="logo"/>
      <a href="https://github.com/Raghavarora27" className="right">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/github.png"
          className="git"
          height={60}
          alt="github"
        />
        </a>
    </div>
  );
};

export default Header;
