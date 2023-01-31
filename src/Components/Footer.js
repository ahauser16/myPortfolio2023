import React from "react";
import {
  LargeLinkedinIcon,
  LargeInstaIcon,
  LargeGithubIcon,
  LargeFacebookIcon,
  LargeCodepenIcon,
  LargeCodesandboxIcon,
} from "./Icons";

export const Footer = () => {
  return (
    <>
      <footer>
        <p>Follow me on social media</p>
        <div className="socialIcons">
          <LargeCodesandboxIcon />
          <LargeFacebookIcon />
          <LargeGithubIcon />
          <LargeInstaIcon />
          <LargeLinkedinIcon />
          <LargeCodepenIcon />
        </div>
        <p className="copyright">Copyright 2023 Arthur John Hauser</p>
      </footer>
    </>
  );
};
