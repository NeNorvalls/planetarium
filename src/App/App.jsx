import React, { useEffect, useState } from "react";
import Context from "../context";
import data from "../data";
import Filter from "../components/Filter/Filter";
import PlanetList from "../components/PlanetList/PlanetList";

import s from "./app.module.css";

const App = () => {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(data);
  }, []);

  const appData = { planets };

  return (
    <Context.Provider value={appData}>
      <div className={s.appContainer}>
        <Filter />
        <PlanetList />
      </div>
    </Context.Provider>
  );
};

export default App;
