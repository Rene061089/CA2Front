import "./styles/style2.css";
import "./styles/customHead.css";
import "./styles/logincss.css";
import Home from "./component/Home";
import React, { useState, useEffect } from "react";
import { LoginUI } from "./component/LogIn";
import Covid from "./component/Covid";
import Recipes from "./component/Recipes"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div>
        <h2 className="customhead">Welcome to Kofoednet.systems</h2>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/fetchCovid">Fetch covid info</NavLink>
          </li>
          <li>
            <NavLink to="/fetchRecipes">Fetch Recipes</NavLink>
          </li>
        </ul>
        <hr />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginUI />} />
            <Route path="/fetchCovid" element={<Covid />} />
            <Route path="/fetchRecipes" element={<Recipes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// const FetchCovid = () => {
//   const [covid, setCovid] = useState([]);
//     fetch("https://kofoednet.systems/CA2BackEnd/api/fetch/")
//     .then(HandleHttpErrors)
//     .then((res) => res.json())
//     .then((data) => this.setState({ covid: data }))
//     .catch(ErrorHandling)
// }

// function MakeOptions(method, body) {
//   var opts = {
//     method: method,
//     headers: {
//       "Content-type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   if (body) {
//     opts.body = JSON.stringify(body);
//   }
//   return opts;
// }

// function HandleHttpErrors(res) {
//   if (!res.ok) {
//     return Promise.reject({ status: res.status, fullError: res.json() });
//   }
//   return res.json();
// }

// function ErrorHandling(err) {
//   console.log(err);
//   if (err.status) {
//     err.fullError.then((e) => console.log(e.message));
//   } else {
//     console.log("Network error");
//   }
// }
