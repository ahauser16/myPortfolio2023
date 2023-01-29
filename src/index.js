import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.scss"

import HomeApp from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

