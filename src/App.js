import React, { useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { Nomatch } from "./Components/Nomatch";
import styled from "styled-components";
import "./App.scss";
import introPicLeft from "./images/laylaTwo.jpg";
import introPicRight from "./images/charlieFour.jpg";
import aboutMePic from "./images/scubaOne.jpg";
import portPicOne from "./images/icelandFourCropped.jpg";
import portPicTwo from "./images/icelandOneCropped.jpg";
import portPicFive from "./images/icelandSixCropped.jpg";
import portPicFour from "./images/icelandThreeCropped.jpg";
import portPicThree from "./images/icelandTwoCropped.jpg";
import { IconContext } from "react-icons";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="experience" element={<Experience />}></Route>
            <Route path="projects/*" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="resume" element={<Resume />}></Route>
            <Route path="*" element={<Nomatch />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}
//BELOW IS ALL NAVBAR CODE
const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: darkblue;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3%;
  /* background-color: red; */
`;

const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
  background-color: lightgreen;
`;

const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
`;

const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

function Layout() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <div>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/about">About</NavbarLink>
              <NavbarLink to="/experience">Experience</NavbarLink>
              <NavbarLink to="/projects">Projects</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
              <NavbarLink to="/resume">Resume</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <> &#10005; </> : <>&#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <NavbarLink to="/lightOrDark">LightvDark</NavbarLink>
            <NavbarLink to="/">HomeLogo</NavbarLink>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/" end>
              Home
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
            <NavbarLinkExtended to="/experience">Experience</NavbarLinkExtended>
            <NavbarLinkExtended to="/projects">Projects</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
            <NavbarLinkExtended to="/resume">Resume</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      <Outlet />
    </div>
  );
}

//when you're ready to link another project check out this code on stackblitz.com
//https://stackblitz.com/github/remix-run/react-router/tree/main/examples/multi-app?file=home%2FApp.jsx
const Projects = () => {
  return (
    <div>
      <ul>
        <li>
          <li>
            <a href="/projectOne" activeClassName="active">
              ProjectOne
            </a>
          </li>
        </li>
        <li>
          <a href="projectTwo" activeClassName="active">
            ProjectTwo
          </a>
        </li>
        <li>
          <a href="projectThree" activeClassName="active">
            ProjectThree
          </a>
        </li>
      </ul>
      <div className="projects">
        <Routes>
          <Route path="projectOne" element={<ProjectOne />}></Route>
          <Route path="projectTwo" element={<ProjectTwo />}></Route>
          <Route path="projectThree" element={<ProjectThree />}></Route>
        </Routes>
      </div>
    </div>
  );
};

//ABOVE IS ALL NAVBAR CODE
/////////////////////////////////////

export const Home = () => {
  function LargeLinkedinIcon() {
    return (
      <IconContext.Provider
        value={{ color: "white", size: "50px", title: "LinkedIn logo" }}
      >
        <div className="socialIconContainer">
          <SiLinkedin />
        </div>
      </IconContext.Provider>
    );
  }

  function LargeInstaIcon() {
    return (
      <IconContext.Provider
        value={{ color: "white", size: "50px", title: "Instagram logo" }}
      >
        <div className="socialIconContainer">
          <SiInstagram />
        </div>
      </IconContext.Provider>
    );
  }

  function LargeGithubIcon() {
    return (
      <IconContext.Provider
        value={{ color: "white", size: "50px", title: "Github logo" }}
      >
        <div className="socialIconContainer">
          <SiGithub />
        </div>
      </IconContext.Provider>
    );
  }

  function LargeFacebookIcon() {
    return (
      <IconContext.Provider
        value={{ color: "white", size: "50px", title: "Facebook logo" }}
      >
        <div className="socialIconContainer">
          <SiFacebook />
        </div>
      </IconContext.Provider>
    );
  }

  return (
    <>
      <div className="welcome">
        <h1>
          Welcome to my<span>Portfolio</span>
        </h1>
      </div>

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

      <section className="aboutMe">
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

          <label message="message">
            Message:
            <textarea name="" id="message"></textarea>
          </label>

          <input class="button" type="submit" value="SEND" />
        </form>
      </section>

      <footer>
        <p>Follow me on social media</p>
        <div className="socialIcons">
          {/* <div className="socialIconContainer">
            <SiLinkedin />
          </div> */}
          <LargeFacebookIcon />
          <LargeGithubIcon />
          <LargeInstaIcon />
          <LargeLinkedinIcon />
        </div>
        <p className="copyright">Copyright 2023 Arthur John Hauser</p>
      </footer>
    </>
  );
};

export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};

export const Experience = () => {
  return <div>This is where I've worked!</div>;
};

export const Contact = () => {
  return <div>Contact Me!</div>;
};

export const Resume = () => {
  return <div>Resume</div>;
};

export const ProjectOne = () => {
  return <h2>My First Project!</h2>;
};
export const ProjectTwo = () => {
  return <h2>My Second Project!</h2>;
};
export const ProjectThree = () => {
  return <h2>Another One!</h2>;
};

export const Github = () => {
  return <div>Github</div>;
};
export const Instagram = () => {
  return <div>Insta</div>;
};
export const LinkedIn = () => {
  return <div>LinkedIn</div>;
};
export const CodePen = () => {
  return <div>CodePen</div>;
};
export const CodeSandbox = () => {
  return <div>CodeSandbox</div>;
};

export default App;
