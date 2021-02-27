import React from "react";
import { NavLink } from "react-router-dom";

export const NavInfoPoke = () => {
  return (
    <nav>
      <NavLink exact to="/pokedex/pokemon/id/about">
        About
      </NavLink>
      <NavLink exact to="/pokedex/pokemon/id/status">
        Status
      </NavLink>
      <NavLink exact to="/pokedex/pokemon/id/encounters">
        Encounters
      </NavLink>
    </nav>
  );
};
