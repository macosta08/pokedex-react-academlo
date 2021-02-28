import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import AllPokemonsProvider from "./context/AllPokemosContext";
import FilterPokeProvider from "./context/FilterPokeContext";

import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};
const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AllPokemonsProvider>
        <FilterPokeProvider>
          <AppRouter />
        </FilterPokeProvider>
      </AllPokemonsProvider>
    </AuthContext.Provider>
  );
};

export default App;
