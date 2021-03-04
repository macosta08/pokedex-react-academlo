import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";

export const AboutPoke = () => {
  const [infoPoke, setInfoPoke] = useState(null);
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
    };
    if (location.state) {
      setInfoPoke(location.state);
    } else {
      getPoke();
    }
  }, [location, id]);
  return (
    <div>
      {infoPoke && (
        <div>
          <h1>{infoPoke.name}</h1>
          <div>
            Types:{" "}
            {infoPoke.types.map((t) => (
              <div key={t.type.name}>{t.type.name}</div>
            ))}
          </div>
          <div>height: {infoPoke.height}</div>
          <div>weight: {infoPoke.weight}</div>
          <div>order: {infoPoke.order}</div>
          <div>
            abilities:{" "}
            {infoPoke.abilities.map((a) => (
              <div key={a.ability.name}>{a.ability.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
