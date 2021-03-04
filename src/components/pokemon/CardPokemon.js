import React from "react";
import { BaseStats } from "../baseStats/BaseStats";
import { TypeIconPoke } from "../typeIconPoke/TypeIconPoke";

export const CardPokemon = ({ infoPoke, handleReturn }) => {
  return (
    <div>
      {infoPoke && (
        <div>
          <h1>{infoPoke.name}</h1>
          <h2>#0{infoPoke.id}</h2>
          <img
            src={infoPoke.sprites.other["official-artwork"].front_default}
            alt={infoPoke.name}
          />
          <TypeIconPoke types={infoPoke.types} />
          <BaseStats stats={infoPoke.stats} />
          <button onClick={handleReturn}>Return</button>
        </div>
      )}
    </div>
  );
};
