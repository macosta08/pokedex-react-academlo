import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";

export const AboutPoke = () => {
  const [infoPoke, setInfoPoke] = useState(null);
  const { id } = useParams();

  const location = useLocation();
  console.log(infoPoke);
  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
      console.log(response.data);
    };
    if (location.state !== undefined || location.state) {
      setInfoPoke(location.state);
      console.log(location.state);
    } else {
      getPoke();
    }
  }, [location, id]);
  return (
    <div>
      <h1>AboutPoke{id}</h1>
    </div>
  );
};
