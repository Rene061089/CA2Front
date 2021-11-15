import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";
import Home from "./component/Home";
import React from "react";
import { LoginUI } from "./component/LogIn";
import Covid from "./component/Covid";
import Recipes from "./component/Recipes";
import facade from "./component/apiFacade";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function NavBar() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <h2 className="customhead">Welcome to Rene´s fetcher</h2>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          {facade.hasUserAccess('user', loggedIn) && 
          <li>
            <NavLink to="/fetchCovid">Fetch covid info</NavLink>
          </li>
          }
          {facade.hasUserAccess('admin', loggedIn) && 
          <li>
            <NavLink to="/fetchRecipes">Fetch Recipes</NavLink>
          </li>}
        </ul>
        <hr />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginUI  loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />

            <Route path="/fetchCovid" element={<Covid facade={facade}/>} />

            <Route path="/fetchRecipes" element={<Recipes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

