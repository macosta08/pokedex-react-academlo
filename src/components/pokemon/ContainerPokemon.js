import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router";
import { request } from "../../utils/HttpMethod";
import { NavInfoPoke } from "../ui/NavInfoPoke";
import { AboutPoke } from "./AboutPoke";
import { CardPokemon } from "./CardPokemon";
import { EncountersPoke } from "./EncountersPoke";
import { StatusPoke } from "./StatusPoke";

export const ContainerPokemon = () => {
  const [infoPoke, setInfoPoke] = useState(null);
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
    };
    if (!location.state) {
      getPoke();
    } else {
      setInfoPoke(location.state);
    }
  }, [location, id]);

  return (
    <>
      <div>
        <CardPokemon />
        <NavInfoPoke url={url} />
      </div>
      <Switch>
        <Route exact path={path} component={AboutPoke} />
        <Route path={`${path}/status`} component={StatusPoke} />
        <Route path={`${path}/encounters`} component={EncountersPoke} />
      </Switch>
    </>
  );
};
