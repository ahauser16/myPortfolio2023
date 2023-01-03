import React, { useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { Nomatch } from "./Components/Nomatch";
import Logo from "../src/logo.svg";
import styled from "styled-components";

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

// const PortLogo = styled.img`
//   margin: 10px;
//   max-width: 100px;
//   height: auto;
// `;

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
              <NavbarLink to="/about">
                About
              </NavbarLink>
              <NavbarLink to="/experience">
                Experience
              </NavbarLink>
              <NavbarLink to="/projects">
                Projects
              </NavbarLink>
              <NavbarLink to="/contact">
                Contact
              </NavbarLink>
              <NavbarLink to="/resume">
                Resume
              </NavbarLink>
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
            {/* <PortLogo src={Logo} /> */}
            <NavbarLink to="/lightOrDark">
              LightvDark
            </NavbarLink>
            <NavbarLink to="/">
              HomeLogo
            </NavbarLink>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/" end>
              Home
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/about">
              About
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/experience">
              Experience
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/projects">
              Projects
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/contact">
              Contact
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/resume">
              Resume
            </NavbarLinkExtended>
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

//BELOW IS ALL NAVBAR CODE

export const Home = () => {
  return <div>You are in Home page</div>;
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
