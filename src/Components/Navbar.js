import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Nomatch } from "./Nomatch";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

export const Navbar = () => {
  const [enableMobileMenu, setEnableMobileMenu] = useState(false);

  const handleClick = () => setEnableMobileMenu(!enableMobileMenu);

  return (
    <>
      <div className="main-menu-desktop-mode">
        {/* <DesktopMenu /> */}
      </div>
      
      <div className="navbarMobileMode">
        <div className=".menu-button">
          {enableMobileMenu ? (
            <VscMenu onClick={handleClick} />
          ) : (
            <VscChromeClose onClick={handleClick} />
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};
//when you're ready to link another project check out this code on stackblitz.com
//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/multi-app?file=home%2FApp.jsx

const MobileMenu = () => {
  <nav>
    <ul>
      <li>
        <Link className="navLink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/about">
          About
        </Link>
      </li>
      {/* <li>
      <Link className="navLink" to="/experience">
        Experience
      </Link>
    </li> */}
      <li>
        <Link className="navLink" to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/resume">
          Resume
        </Link>
      </li>
      <li className="hidden-mobile-view">
        <Link className="navLink" to="/lightOrDark">
          LightvDark
        </Link>
      </li>
    </ul>
  </nav>;
};
