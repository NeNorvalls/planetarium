import React from "react";
import PlanetItem from "../PlanetItem/PlanetItem";
import s from "./planetList.module.css";

const PlanetList = () => {
  return (
    <ul className={s.list}>
      <PlanetItem />
    </ul>
  );
};

export default PlanetList;
