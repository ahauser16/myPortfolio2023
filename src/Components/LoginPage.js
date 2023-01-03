import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { fakeAuth } from "../hooks/fakeAuth";

// AuthRoutes_Step4 -> Here we are having a login button that when clicked will call the fake 'login' function and redirect the user to the pathname that was passed to state back in our 'navigate' function (see AuthRoutes_Step3 in ProtectedPage.js). In this case the pathname will have the value: '/protected' .

//see PrivateRoute.js for further steps!


function LoginPage() {
  let navigate = useNavigate()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: "/" } }
  let login = () => {
    fakeAuth.login(() => {
      navigate(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default LoginPage
