import React from "react";
import { BaseStats } from "../baseStats/BaseStats";
import { TypeIconPoke } from "../typeIconPoke/TypeIconPoke";
import "./cardPokemon.css";
export const CardPokemon = ({ infoPoke, handleReturn }) => {
  return (
    <>
      {infoPoke && (
        <div className="d-flex  bd-highlight container-card">
          <div class="p-2 flex-fill bd-highlight">
            <div className=" imgId">#{infoPoke.id}</div>
            <div class="d-flex justify-content-center back-center">
              <h1>{infoPoke.name}</h1>
              <img
                src={infoPoke.sprites.other["official-artwork"].front_default}
                alt={infoPoke.name}
              />
            </div>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <div>
              <TypeIconPoke types={infoPoke.types} />
              <BaseStats stats={infoPoke.stats} />
              <button onClick={handleReturn}>Return</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
