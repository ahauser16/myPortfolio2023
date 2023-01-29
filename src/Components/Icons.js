import React from "react";
import { IconContext } from "react-icons";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiCodepen } from "react-icons/si";
import { SiCodesandbox } from "react-icons/si";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

// import { IconName } from "react-icons/vsc";

//////////////
export const LargeLinkedinIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "LinkedIn logo" }}
    >
      <a
        href="https://www.linkedin.com/in/arthur-hauser/"
        className="socialIconContainer"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
    </IconContext.Provider>
  );
};

export const LargeInstaIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Instagram logo" }}
    >
      <a
        href="https://www.instagram.com/arthur_is_not_available/"
        className="socialIconContainer"
        target="_blank"
        rel="noreferrer"
      >
        <SiInstagram />
      </a>
    </IconContext.Provider>
  );
};
export const LargeGithubIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Github logo" }}
    >
      <a
        href="https://github.com/ahauser16"
        className="socialIconContainer"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub />
      </a>
    </IconContext.Provider>
  );
};

export const LargeFacebookIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Facebook logo" }}
    >
      <a
        href="https://www.facebook.com/arthur.hauser.16"
        className="socialIconContainer"
        target="_blank"
        rel="noreferrer"
      >
        <SiFacebook />
      </a>
    </IconContext.Provider>
  );
};

export const LargeCodepenIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Codepen logo" }}
    >
      <a
        href="https://codepen.io/ahauser16"
        className="socialIconContainer"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <SiCodepen />
      </a>
    </IconContext.Provider>
  );
};

export const LargeCodesandboxIcon = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Codesandbox logo" }}
    >
      <a
        href="https://codesandbox.io/u/arthur.hauser"
        className="socialIconContainer"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <SiCodesandbox />
      </a>
    </IconContext.Provider>
  );
};

export const HamMenuOpen = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Hamburger Menu" }}
    >
      <div className="menu-button">
        <VscMenu />
      </div>
    </IconContext.Provider>
  );
};

export const HamMenuClose = () => {
  return (
    <IconContext.Provider
      value={{ color: "white", size: "50px", title: "Hamburger Menu" }}
    >
      <div className="menu-button">
        <VscChromeClose />
      </div>
    </IconContext.Provider>
  );
};
