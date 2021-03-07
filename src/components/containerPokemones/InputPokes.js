import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

export default function CustomizedInputBase({ hadleInputChange }) {
  return (
    <Paper component="form">
      <SearchIcon />

      <InputBase
        placeholder="Search by name"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={hadleInputChange}
      />
    </Paper>
  );
}
