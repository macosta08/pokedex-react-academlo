import React, { useEffect, useState } from "react";
import { request } from "../../utils/HttpMethod";
import { CardPoke } from "./CardPoke";
import "./conatinerPoke.css";
import CustomizedInputBase from "./InputPokes";
import { InputType } from "./InputType";
import { Pagination } from "./Pagination";
export const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [filterTypesPokemon, setfilterTypesPokemon] = useState([]);
  const [optionTypePoke, setOptionTypePoke] = useState(null);
  const [page, setPage] = useState(1);

  const [amount] = useState(4);

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
      <div className="col" key={pokemon.name}>
        <CardPoke pokemon={pokemon} />
      </div>
    ));

  const pagesAmount = Math.ceil(filterPokemon.length / amount);

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
    setPage(1);
  };

  return (
    <div className="container">
      <div className="d-inline-flex p-2 bd-highlight">
        <div className="title-text">
          <h1>Pokémon</h1>

          <p>Search for your Pokémon by name or by type</p>

          <div className="input-name">
            <CustomizedInputBase hadleInputChange={hadleInputChange} />
          </div>
        </div>
      </div>
      <div class="d-flex flex-row-reverse bd-highlight">
        <InputType
          hadleInputTypePoke={hadleInputTypePoke}
          filterTypesPokemon={filterTypesPokemon}
        />
      </div>

      <div className="container paddCont">
        <div className="row">{CardPokemon}</div>
      </div>

      <hr />

      <Pagination page={page} pagesAmount={pagesAmount} setPage={setPage} />
    </div>
  );
};
