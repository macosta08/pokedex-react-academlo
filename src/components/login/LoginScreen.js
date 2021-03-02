import { TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    //Para guardar la ruta anterior visitada
    const lastPath = localStorage.getItem("lastPath") || "/pokedex";

    dispatch({
      type: types.login,
      payload: {
        name: data.coach,
      },
    });
    history.replace(lastPath);
  };

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
        <TextField
          id="standard-basic"
          label="Masters"
          type="text"
          placeholder="Coach Pokemon"
          name="coach"
          inputRef={register}
          required
        />

        <button type="submit">Coach</button>
      </form>
    </div>
  );
};
