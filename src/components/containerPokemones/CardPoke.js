import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { request } from "../../utils/HttpMethod";
import { typePokeBckg } from "../../utils/typePokeBckg";
import "./cardPoke.css";

export const CardPoke = ({ pokemon }) => {
  const [poke, setPoke] = useState(null);
  const [typesIcon, setTypesIcon] = useState([]);
  let namePoke = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const typeIcon = (type) => {
    const typeExist = typePokeBckg.hasOwnProperty(type);

    return typeExist ? typePokeBckg[type].bckgIcon : null;
  };

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

  useEffect(() => {
    if (poke) {
      const arr = poke.types.map((t) => typeIcon(t.type.name));
      setTypesIcon(arr);
    }
  }, [poke]);

  return (
    <div>
      {poke && (
        <div className="padd-card align-middle">
          <div
            className="card position-relative ml2 padd-card"
            style={{
              width: 200,
              height: 355,
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
              className="card-body position-absolute"
              style={{
                width: 198,
                height: 280,
              }}
            >
              <h3 className="card-title">{namePoke}</h3>

              <div className=" iconType-conten">
                {typesIcon.map((typeIcon) => (
                  <div
                    key={typeIcon}
                    className=" poke-type-icon"
                    style={{ backgroundImage: typeIcon }}
                  ></div>
                ))}
              </div>
              <div className="stats">
                <div className="d-flex justify-content-between">
                  <h6 className="card-subtitle mb-2 text-muted">HP:</h6>

                  <div class="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: poke.stats[0].base_stat }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {poke.stats[0].base_stat}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="card-subtitle mb-2 text-muted">Atk:</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: poke.stats[1].base_stat }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {poke.stats[1].base_stat}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <h6 className="card-subtitle mb-2 text-muted">Def:</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: poke.stats[2].base_stat }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {poke.stats[2].base_stat}
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="card-subtitle mb-2 text-muted">Spd:</h6>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: poke.stats[5].base_stat }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {poke.stats[5].base_stat}
                    </div>
                  </div>
                </div>
              </div>

              <div className="button-center">
                <Button size="large">
                  <Link
                    to={{
                      pathname: `/pokedex/pokemon/${poke.id}`,
                      state: { pokemon: poke },
                    }}
                  >
                    <div
                      className="pokeball pokeball-button"
                      style={{
                        backgroundImage: "url(/img/pokeball-card.png) ",
                      }}
                    ></div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
