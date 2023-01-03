import React from "react";
import { fakeAuth } from "../hooks/fakeAuth";
import { useNavigate } from "react-router-dom";

//AuthRoutes_Step3 -> Here we are showing a welcome message and a logout button that when clicked will redirect the user to our login page. NB-> we are passing 'state' as the second argument to the 'navigate' function which will be used to redirect the user to the '/protected' route after the user logs in.

//see LoginPage.js for further steps!

const ProtectedPage = ({ x }) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>You are logged in. Welcome to protected page! Value of x is {x}</p>
      <button
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default ProtectedPage;
