import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default function CustomizedInputBase({ hadleInputChange }) {
  return (
    <Paper component="form">
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="Search by name of Pokémon"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={hadleInputChange}
      />
    </Paper>
  );
}
