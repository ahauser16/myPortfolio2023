import React from "react"
import { useRoutes, Outlet } from "react-router"
import { Link } from "react-router-dom"

//https://www.codingdeft.com/posts/react-router-tutorial/#configuring-routes-as-an-object
//ConfigRoutesasObject_Step1-> It is not necessary to configure the routes as a component and wrap it inside the Routes component. We can specify the route configuration in a JSON object as well. This will help when we have dynamic routes and we get the route details from an API call.

const RouteAsObj = () => {
    // ConfigRoutesasObject_Step2-> We are creating the RouteAsObj component similarly to previous examples. The difference is that we are making use of useRoutes hook and passing our route configuration to it. The useRoutes hook returns a valid react component, which we have embedded in the component as a variable called 'element'.  Note we are assigning our route components to element whereas in App.js we normally assign our page components to element.
  let element = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "route2", element: <Route2 /> },
    {
      path: "route3",
      element: <Route3 />,
      // children can be used to configure nested routes
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ])

  return (
    <div>
      <ul>
        <li>
          <Link to="">Route1</Link>
        </li>
        <li>
          <Link to="route2">Route2</Link>
        </li>
        <li>
          <Link to="route3">Route3</Link>
        </li>
      </ul>
      {/* NB we include our element variable at the same level as the unordered list that contain our links. */}
      {element}
    </div>
  )
}

const Route1 = () => <h1>Route1</h1>
const Route2 = () => <h1>Route2</h1>
const Route3 = () => {
  return (
    <div>
      <h1>Route3</h1>
      <ul>
        <li>
          <Link to="child1">Child1</Link>
        </li>
        <li>
          <Link to="child2">Child2</Link>
        </li>
      </ul>
      {/* 
      ConfigRoutesasObject_Step3-> Also, you could see that we have added <Outlet /> component inside the Route3. This will help in rendering the matching child route, when the routes are nested. 
      */}
      <Outlet />
    </div>
  )
}
const Child1 = () => <h2>Child1</h2>
const Child2 = () => <h2>Child2</h2>
const NotFound = () => <h1>NotFound</h1>

export default RouteAsObj
