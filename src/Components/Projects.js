import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export const Projects = () => {
  return (
    <div>
      <ul>
        <li>
          <li>
            <Link className="navLink" to="/projectOne" activeClassName="active">
              ProjectOne
            </Link>
          </li>
        </li>
        <li>
          <Link className="navLink" to="/projectTwo" activeClassName="active">
            ProjectTwo
          </Link>
        </li>
        <li>
          <Link className="navLink" to="projectThree" activeClassName="active">
            ProjectThree
          </Link>
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

const ProjectOne = () => {
  return <h2>My First Project!</h2>;
};
const ProjectTwo = () => {
  return <h2>My Second Project!</h2>;
};
const ProjectThree = () => {
  return <h2>Another One!</h2>;
};
