import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ContainerPoke } from "../components/containerPokemones/ContainerPoke";
import { ContainerPokemon } from "../components/pokemon/ContainerPokemon";
import { Navbar } from "../components/ui/NavBar";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/pokedex" component={ContainerPoke} />
        <Route
          exact
          path="/pokedex/pokemon/id/about"
          component={ContainerPokemon}
        />
        <Route
          exact
          path="/pokedex/pokemon/id/status"
          component={ContainerPokemon}
        />
        <Route
          exact
          path="/pokedex/pokemon/id/encounters"
          component={ContainerPokemon}
        />
        <Redirect to="/pokedex" />
      </Switch>
    </>
  );
};
