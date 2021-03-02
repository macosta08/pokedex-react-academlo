import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Pokedex } from "../components/containerPokemones/Pokedex";
import { ContainerPokemon } from "../components/pokemon/ContainerPokemon";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/pokedex" component={Pokedex} />

        <Route path="/pokedex/pokemon/:id" component={ContainerPokemon} />

        <Redirect to="/pokedex" />
      </Switch>
    </>
  );
};
