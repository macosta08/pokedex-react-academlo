import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { BaseStats } from "../baseStats/BaseStats";
import { TypeIconPoke } from "../typeIconPoke/TypeIconPoke";
import "./cardPokemon.css";

export const CardPokemon = ({ id, infoPoke }) => {
  let namePoke = infoPoke.name.charAt(0).toUpperCase() + infoPoke.name.slice(1);
  return (
    <>
      {infoPoke && (
        <div className="d-flex  bd-highlight container-card">
          <div className="p-2 flex-fill bd-highlight">
            <div className="d-flex justify-content-between">
              <div className="imgId">#{infoPoke.id}</div>
              <h1>{namePoke}</h1>

              <img
                src={infoPoke.sprites.other["official-artwork"].front_default}
                alt={infoPoke.name}
              />
            </div>
          </div>
          <div className="p-2 flex-fill bd-highlight content-stats">
            <h5>Types</h5>
            <hr />
            <TypeIconPoke types={infoPoke.types} />

            <h5>Base Stats</h5>
            <hr />
            <BaseStats stats={infoPoke.stats} />
            <hr />
            <Button>
              <Link
                to={{
                  pathname: `/pokedex/pokemon/${id}/encounters`,
                  state: infoPoke,
                }}
              >
                Localite
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
