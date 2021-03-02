import React, { useEffect, useState } from "react";
import { request } from "../../utils/HttpMethod";
import { CardPoke } from "./CardPoke";

export const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [filterTypesPokemon, setfilterTypesPokemon] = useState([]);
  const [optionTypePoke, setOptionTypePoke] = useState(null);
  const [page, setPage] = useState(1);

  const [amount, setAmount] = useState(4);

  const getPokes = async (
    endpoint = "https://pokeapi.co/api/v2/pokemon?limit=898"
  ) => {
    const response = await request(endpoint);
    setAllPokemon(response.data.results);
    setFilterPokemon(response.data.results);
  };

  const getTypesPokes = async (endpoint = "https://pokeapi.co/api/v2/type") => {
    const response = await request(endpoint);
    setfilterTypesPokemon(response.data.results);
  };

  useEffect(() => {
    getPokes();
  }, []);

  useEffect(() => {
    getTypesPokes();
  }, []);

  useEffect(() => {
    const getTypesPokes = async (endpoint) => {
      const response = await request(endpoint);
      const listPoke = response.data.pokemon.map((p) => p.pokemon);
      setFilterPokemon(listPoke);
    };
    if (optionTypePoke) getTypesPokes(optionTypePoke.url);
    else setFilterPokemon(allPokemon);
  }, [optionTypePoke, allPokemon]);

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

  const optionTypes = filterTypesPokemon.map((type) => (
    <option key={type.name}>{type.name}</option>
  ));

  const hadleInputChange = ({ target }) => {
    const textSearch = target.value;
    if (textSearch.length >= 3)
      setFilterPokemon(
        allPokemon.filter((poke) => poke.name.includes(textSearch))
      );
    else setFilterPokemon(allPokemon);

    setPage(1);
  };

  const hadleInputTypePoke = (e) => {
    const type = e.target.value;
    const urlTypePoke = filterTypesPokemon.find((t) => t.name === type);
    setOptionTypePoke(urlTypePoke);
    console.log(urlTypePoke);
  };

  return (
    <div>
      <input type="text" onChange={hadleInputChange} />

      <select type="select" onChange={hadleInputTypePoke}>
        <option>All Types</option>
        {optionTypes}
      </select>

      <p>page:{page}</p>
      {pages.length > 0 && pages}
      <div>{CardPokemon}</div>
    </div>
  );
};
