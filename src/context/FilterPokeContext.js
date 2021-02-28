import { createContext } from "react";

export const FilterPokeContext = createContext();

const FilterPokeProvider = (props) => {
  return (
    <FilterPokeContext.Provider value={{}}>
      {props.children}
    </FilterPokeContext.Provider>
  );
};

export default FilterPokeProvider;
