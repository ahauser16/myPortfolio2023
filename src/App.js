import React, { useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { Nomatch } from "./Components/Nomatch";
// import styled from "styled-components";
import "./App.scss";
import introPicLeft from "./images/laylaTwo.jpg";
import introPicRight from "./images/charlieFour.jpg";
import aboutMePic from "./images/scubaOne.jpg";
import portPicOne from "./images/icelandFourCropped.jpg";
import portPicTwo from "./images/icelandOneCropped.jpg";
import portPicFive from "./images/icelandSixCropped.jpg";
import portPicFour from "./images/icelandThreeCropped.jpg";
import portPicThree from "./images/icelandTwoCropped.jpg";
import {
  LargeLinkedinIcon,
  LargeInstaIcon,
  LargeGithubIcon,
  LargeFacebookIcon,
  LargeCodepenIcon,
  LargeCodesandboxIcon,
  HamMenuOpen,
  HamMenuClose,
} from "./Components/Icons";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { Navbar } from "./Components/Navbar";
// import { Projects } from "./Components/Projects";

// import { IconName } from "react-icons/vsc";

export default function HomeApp() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />}> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            {/* <Route path="about" element={<About />}></Route> */}
            {/* <Route path="experience" element={<Experience />}></Route> */}
            {/* <Route path="projects/*" element={<Projects />}></Route> */}
            {/* <Route path="contact" element={<Contact />}></Route> */}
            <Route path="resume" element={<Resume />}></Route>
            <Route path="*" element={<Nomatch />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

function Layout() {
  return (
    <>
      <Home />
    </>
  );
}

const Home = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <>
      <div className="welcome">
        <HamMenuOpen
          className="menu-button"
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        />
        {extendNavbar ? (
          <>
            {" "}
            <VscMenu />{" "}
          </>
        ) : (
          <>
            {" "}
            <VscChromeClose />{" "}
          </>
        )}
      </div>

      <About />
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const About = () => {
  return (
    <>
      <section className="introCont">
        <div className="introLeft">
          <img src={introPicLeft} alt="hounds running" />
        </div>
        <div className="introMiddle">
          <h2>Making it happen</h2>
          <p>
            Lorem ipsum Anim officia irure est aliquip exercitation magna
            deserunt do amet ut pariatur proident dolore dolore. Quis labore
            ipsum irure exercitation eiusmod officia aliqua do. Ullamco aliquip
            aute consectetur eiusmod reprehenderit do laborum id laborum veniam
            ea sit consectetur eu. Incididunt qui sunt reprehenderit sunt qui
            qui laborum culpa pariatur amet. Reprehenderit laborum eiusmod
            cillum minim officia nisi veniam sunt ea esse ad.
          </p>
          <p>
            Lorem ipsum Anim officia irure est aliquip exercitation magna
            deserunt do amet ut pariatur proident dolore dolore. Quis labore
            ipsum irure exercitation eiusmod officia aliqua do. Ullamco aliquip
            aute consectetur eiusmod reprehenderit do laborum id laborum veniam
            ea sit consectetur eu. Incididunt qui sunt reprehenderit sunt qui
            qui laborum culpa pariatur amet. Reprehenderit laborum eiusmod
            cillum minim officia nisi veniam sunt ea esse ad.
          </p>
        </div>
        <div className="introRight">
          <img src={introPicRight} alt="treeing walker coonhound running" />
        </div>
      </section>
      <section className="aboutMe" id="about">
        <img className="aboutImg" src={aboutMePic} alt="arthur on a boat" />
        <h1 className="aboutTitle">Arthur John Hauser</h1>
        <h2 className="aboutSubtitle">MERN Stack Developer</h2>
        <div className="aboutText">
          <p>
            Laboris do amet veniam voluptate nulla nostrud labore sint. Ea et
            duis eiusmod deserunt reprehenderit proident. Voluptate ad enim
            proident commodo nisi reprehenderit ad veniam ex nostrud aliqua.
          </p>
          <p>
            Laboris do amet veniam voluptate nulla nostrud labore sint. Ea et
            duis eiusmod deserunt reprehenderit proident. Voluptate ad enim
            proident commodo nisi reprehenderit ad veniam ex nostrud aliqua.
          </p>
        </div>
      </section>
    </>
  );
};

// const Experience = () => {
//   return (
//     <>

//     </>
//   );
// };

const Projects = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1>My Work</h1>
        <div className="portfolioItems">
          {/* Portfolio Item1 */}
          <figure class="portfolioItem ">
            <img
              className="portfolioImg"
              src={portPicOne}
              alt="portfolio item"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item2 */}
          <figure class="portfolioItem featured">
            <img
              className="portfolioImg"
              src={portPicTwo}
              alt="a fjord in Iceland on a sunny day"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item3 */}
          <figure class="portfolioItem ">
            <img
              className="portfolioImg"
              src={portPicThree}
              alt="hot springs in Iceland"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item4 */}
          <figure class="portfolioItem ">
            <img
              className="portfolioImg"
              src={portPicFour}
              alt="giant fjord and a small house"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>

          {/* Portfolio Item5 */}
          <figure class="portfolioItem">
            <img
              className="portfolioImg"
              src={portPicFive}
              alt="greenland as seen from space"
            />
            <figcaption>
              <h2 className="portfolioTitle">Project Name</h2>
              <p className="portfolioDescription">
                A short description placehold!
              </p>
              <a href="#" className="portfolioLink">
                More info
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h1>Contact me</h1>
        <form action="">
          <label className="name">
            Name:
            <input type="text" id="name" />
          </label>

          <label className="email">
            Email:
            <input type="email" />
          </label>

          <label message="message" className="message">
            Message:
            <textarea name="" id="message"></textarea>
          </label>

          <input class="button form-button" type="submit" value="SEND" />
        </form>
      </section>
    </>
  );
};

const Footer = () => {
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

const Resume = () => {
  return <div>Resume</div>;
};
