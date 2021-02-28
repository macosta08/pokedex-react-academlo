import { createContext, useEffect, useState } from "react";
import { request } from "../utils/HttpMethod";

export const AllPokemonsContext = createContext();

const AllPokemonsProvider = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [filterTypesPokemon, setfilterTypesPokemon] = useState([]);
  const [optionTypePoke, setOptionTypePoke] = useState(null);
  const [page, setPage] = useState(1);

  const getPokes = async (
    endpoint = "https://pokeapi.co/api/v2/pokemon?limit=1118"
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
    getTypesPokes();
  }, []);

  useEffect(() => {
    const getTypesPokes = async (endpoint) => {
      const response = await request(endpoint);
      const listPoke = response.data.pokemon.map((p) => p.pokemon);
      setFilterPokemon(listPoke);
    };
    if (optionTypePoke) {
      getTypesPokes(optionTypePoke.url);
    }
  }, [optionTypePoke]);

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
  };

  return (
    <AllPokemonsContext.Provider
      value={{
        filterPokemon,
        hadleInputChange,
        page,
        setPage,
        filterTypesPokemon,
        hadleInputTypePoke,
      }}
    >
      {props.children}
    </AllPokemonsContext.Provider>
  );
};

export default AllPokemonsProvider;
