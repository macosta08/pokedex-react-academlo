import React from "react";
import { useParams } from "react-router";

export const StatusPoke = () => {
  const { id } = useParams();
  return (
    <div>
      <p>StatusPoke{id}</p>
      {/* <img src={pokemonInfo.sprites.back_default} alt={pokemonInfo.name} />
      <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
      <img src={pokemonInfo.sprites.back_shiny} alt={pokemonInfo.name} />
      <img src={pokemonInfo.sprites.front_shiny} alt={pokemonInfo.name} /> */}
    </div>
  );
};
