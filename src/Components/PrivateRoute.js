import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { fakeAuth } from "../hooks/fakeAuth";

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */

// AuthRoutes_Step5 -> The 'PrivateElement' route below is a wrapper around the Route[Navigate?] component to check if the user is authenticated. If the user is authenticated then 'PrivateElement' route renders the passed component otherwise it redirects the user to the login page using the Navigate component.

// AuthRoutes_Step6 -> The 'Navigate' component is another way of redirecting the user to another page. We are also passing the 'state' object that contains the key/value pair 'from: location' to the login route so that user can be redirected back to [their initial route location]  once they log in.

const PrivateElement = ({ children }) => {
  let location = useLocation()
  return fakeAuth.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}

export default PrivateElement
