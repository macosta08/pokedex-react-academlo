import React, { useContext, useState } from "react";
import { AllPokemonsContext } from "../../context/AllPokemosContext";
import { CardPoke } from "./CardPoke";

export const ContainerPoke = () => {
  const { filterPokemon, hadleInputChange, page, setPage } = useContext(
    AllPokemonsContext
  );

  const [amount, setAmount] = useState(4);

  const CardPokemon = filterPokemon
    .slice((page - 1) * amount, page * amount)
    .map((pokemon) => (
      <div key={pokemon.name}>
        <CardPoke pokemon={pokemon} />
      </div>
    ));

  const pagesAmount = Math.ceil(filterPokemon.length / amount);

  const arrPages = (pagesAmount) => {
    let arr = [];
    for (let index = 0; index < pagesAmount; index++) {
      arr.push(index + 1);
    }
    return arr;
  };

  const pages = arrPages(pagesAmount)
    .slice(page > 5 ? page - 5 : 0, page > 5 ? page + 5 : 10)
    .map((e) => (
      <button key={e} onClick={() => setPage(e)}>
        {e}
      </button>
    ));

  return (
    <div>
      <input type="text" onChange={hadleInputChange} />
      <p>{pagesAmount}</p>
      <p>page:{page}</p>
      {pages.length > 0 && pages}
      <div>{CardPokemon}</div>
    </div>
  );
};
