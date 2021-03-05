import React, { useEffect, useState } from "react";
import { request } from "../../utils/HttpMethod";
import { typePokeBckg } from "../../utils/typePokeBckg";
import { BaseStats } from "../baseStats/BaseStats";
import { ButtonPokeball } from "../buttonPokeball/ButtonPokeball";
import { Spinner } from "../spinner/Spinner";
import { TypeIconPoke } from "../typeIconPoke/TypeIconPoke";
import "./cardPoke.css";

export const CardPoke = ({ pokemon }) => {
  const [poke, setPoke] = useState(null);
  let namePoke = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const bckgColor = (type) => {
    const typeExist = typePokeBckg.hasOwnProperty(type);
    return typeExist ? typePokeBckg[type].bckgColor : "#ffcdd2";
  };

  useEffect(() => {
    const getPoke = async (endpoint = pokemon.url) => {
      const response = await request(endpoint);
      setPoke(response.data);
    };
    getPoke();
  }, [pokemon]);

  return (
    <div>
      <div className="padd-card align-middle animate__animated animate__fadeIn">
        {!poke && <Spinner />}
        {poke && (
          <div
            className="card ml2 padd-card"
            style={{
              width: 200,
              background: `${bckgColor(poke.types[0].type.name)}`,
            }}
          >
            <div className="pokemon-snap">
              <img
                className="img-pok"
                src={poke.sprites.other["official-artwork"].front_default}
                alt={poke.name}
              />
            </div>
            <div
              className="card-body"
              style={{
                width: 198,
                height: 200,
              }}
            >
              <h3 className="card-title">{namePoke}</h3>

              <TypeIconPoke types={poke.types} />

              <BaseStats stats={poke.stats} />
              <ButtonPokeball poke={poke} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
