import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
   <ul className="navbar">
    <li>
    <NavLink 
        exact to="/"
        activeStyle={{
          color: "purple",
        }}
    >
        Home
    </NavLink>
    </li>
    <li>
    <NavLink 
        exact to="/movies"
        activeStyle={{
          color: "purple",
        }}
    >
        Movies
    </NavLink>
    </li>
    <li>
    <NavLink 
        exact to="/directors"
        activeStyle={{
          color: "purple",
        }}
    >
        Directors
    </NavLink>
    </li>
    <li>
    <NavLink 
        exact to="/actors"
        activeStyle={{
          color: "purple",
        }}
    >
        Actors
    </NavLink>
    </li>
   </ul>
  )
}

export default NavBar;
