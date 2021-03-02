import React from "react";
import { NavLink } from "react-router-dom";

export const NavInfoPoke = ({ url }) => {
  return (
    <nav>
      <NavLink to={`${url}`}>About</NavLink>
      <NavLink to={`${url}/status`}>Status</NavLink>
      <NavLink to={`${url}/encounters`}>Encounters</NavLink>
    </nav>
  );
};
