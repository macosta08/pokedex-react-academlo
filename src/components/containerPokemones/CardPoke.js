import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../utils/HttpMethod";

export const CardPoke = ({ pokemon }) => {
  const [poke, setPoke] = useState(null);
  useEffect(() => {
    const getPoke = async (endpoint = pokemon.url) => {
      const response = await request(endpoint);
      setPoke(response.data);
    };
    getPoke();
  }, [pokemon]);

  return (
    <div>
      {poke && (
        <div>
          <img
            src={poke.sprites.other["official-artwork"].front_default}
            alt={poke.name}
          />
          {poke.types.map((t) => (
            <div key={t.type.name}>{t.type.name}</div>
          ))}
          hp: {poke.stats[0].base_stat}
          attack: {poke.stats[1].base_stat}
          defense: {poke.stats[2].base_stat}
          speed: {poke.stats[5].base_stat}
          <div>{poke.name}</div>
          <button>
            <Link to="/pokedex/pokemon/id/about">Poke</Link>
          </button>
        </div>
      )}
    </div>
  );
};
