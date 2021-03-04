import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";

export const StatusPoke = () => {
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
          Move:
          {infoPoke.moves.map((m) => (
            <div>{m.move.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
