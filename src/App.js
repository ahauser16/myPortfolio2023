import loadable from "@loadable/component";
import React from "react";
import { NavLink as Link, Route, Routes, Outlet } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
import Invoices, { Invoice } from "./Components/Invoices";
import LoginPage from "./Components/LoginPage";
import PrivateRoute from "./Components/PrivateRoute";
import ProtectedPage from "./Components/ProtectedPage";
import RouteAsObj from "./Components/RouteAsObj";
import Search from "./Components/Search";

//https://www.codingdeft.com/posts/react-router-tutorial/#code-splitting
//CodeSplitting_Step1 -> When we have lot of pages in out application, we will end up having lot of code. We don't want our user to download all the code when they just load the home page. In order to package code of different routes to separate chunks, along with react router we can make use of loadable components(https://loadable-components.com/), which takes advantage of dynamic imports.

//CodeSplitting_Step2 -> let's import the Dashboard component dynamically and pass it to the loadable function. It also accepts a second argument, which has a fallback property, which needs a component name as the argument. This fallback component will be rendered while the js code is being downloaded. Also, if the component js fails to load, the fallback component will remain being shown.

// CodeSplitting_Step3-> Now clear the network logs and click on dashboard link and you will observe a new js file being loaded, which is responsible for rendering the contents inside dashboard: chunk.js.
const Loading = () => {
  return <div>Loading...</div>;
};

const Dashboard = loadable(() => import("./Components/Dashboard.js"), {
  fallback: <Loading />,
});

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeClassName="active">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/object_route" activeClassName="active">
              Route as Object
            </Link>
          </li>
          <li>
            <Link to="/search" activeClassName="active">
              Search
            </Link>
          </li>
          <li>
            <Link to="/public" activeClassName="active">
              Public Page
            </Link>
          </li>
          <li>
            <Link to="/protected" activeClassName="active">
              Protected Page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="object_route/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
          <Route
            path="protected"
            element={
              <PrivateRoute>
                <ProtectedPage x={1} />
              </PrivateRoute>
            }
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={<p>Please select an invoice above</p>}
            ></Route>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export const Home = () => {
  return <div>You are in Home page</div>;
};
export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};
export const PublicPage = () => {
  return <div>This page can be accessed by anyone</div>;
};
export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
