import React from "react";
import { Link } from "react-router-dom";

export const ContainerPoke = () => {
  return (
    <div>
      <button>
        <Link to="/pokedex/pokemon/id/about">Poke</Link>
      </button>
    </div>
  );
};
