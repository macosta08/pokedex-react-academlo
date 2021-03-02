import React from "react";
import { useParams } from "react-router";

export const AboutPoke = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>AboutPoke{id}</h1>
    </div>
  );
};
