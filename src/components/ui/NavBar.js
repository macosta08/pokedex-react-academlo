import Paper from "@material-ui/core/Paper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import red from "@material-ui/core/colors/red";
import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./nav.css";
import { Button } from "@material-ui/core";
export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <Paper>
      <div className="nav-container">
        <span className="left">
          <NavLink exact to="/pokedex">
            <ArrowBackIcon style={{ fontSize: 30, color: red[600] }} />
          </NavLink>
        </span>
        <span className="right">
          <span className="name-nav">{name}</span>
          <Button variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </span>
      </div>
    </Paper>
  );
};
