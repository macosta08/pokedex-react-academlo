import { createContext, useEffect, useState } from "react";
import { request } from "../utils/HttpMethod";

export const AllPokemonsContext = createContext();

const AllPokemonsProvider = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [page, setPage] = useState(1);

  const getPokes = async (
    endpoint = "https://pokeapi.co/api/v2/pokemon?limit=1118"
  ) => {
    const response = await request(endpoint);
    setAllPokemon(response.data.results);
    setFilterPokemon(response.data.results);
    console.log(response.data.results);
  };

  useEffect(() => {
    getPokes();
  }, []);

  const hadleInputChange = ({ target }) => {
    const textSearch = target.value;
    if (textSearch.length >= 3)
      setFilterPokemon(
        allPokemon.filter((poke) => poke.name.includes(textSearch))
      );
    else setFilterPokemon(allPokemon);

    setPage(1);
  };

  return (
    <AllPokemonsContext.Provider
      value={{ filterPokemon, hadleInputChange, page, setPage }}
    >
      {props.children}
    </AllPokemonsContext.Provider>
  );
};

export default AllPokemonsProvider;
