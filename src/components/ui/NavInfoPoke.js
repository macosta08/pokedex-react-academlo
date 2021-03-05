import { Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export const NavInfoPoke = ({ url }) => {
  return (
    <nav>
      <Paper>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <NavLink to={`${url}`}>
            <Tab label="About" />
          </NavLink>
          <NavLink to={`${url}/moves`}>
            <Tab label="Moves" />
          </NavLink>
          <NavLink to={`${url}/encounters`}>
            <Tab label="Encounters" />
          </NavLink>
        </Tabs>
      </Paper>
    </nav>
  );
};
