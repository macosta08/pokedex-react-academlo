import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { request } from "../../utils/HttpMethod";

export const EncountersPoke = () => {
  const [infoPoke, setInfoPoke] = useState(null);
  const { id } = useParams();
  console.log(infoPoke);
  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
      console.log(response.data);
    };
    if (id) {
      getPoke();
    }
  }, [id]);
  return (
    <div>
      <h1>EncountersPoke</h1>
    </div>
  );
};
