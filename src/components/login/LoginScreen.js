import { Button, InputBase } from "@material-ui/core";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./login.css";

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
      <div className="login login-body ">
        <div
          className="pokeball-big"
          style={{ backgroundImage: "url(/img/pokeball-big.png) " }}
        ></div>
        <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
          <div className="title">
            <InputBase
              className="title"
              placeholder="Write your coach name"
              type="text"
              name="coach"
              inputRef={register}
              required
              inputProps={{ "aria-label": "search" }}
            />
            <hr />
          </div>
          <Button type="submit" size="large">
            <div
              className="pokeball"
              style={{ backgroundImage: "url(/img/pokeball.png) " }}
            ></div>
          </Button>
          <h1>Pokédex</h1>
        </form>
      </div>
    </div>
  );
};
