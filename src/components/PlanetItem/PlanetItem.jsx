import React, { useContext } from "react";
import Context from "../../context";
import s from "./planetItem.module.css";

const PlanetItem = () => {
  const { planets } = useContext(Context);

  return (
    <>
      {planets.map(
        ({
          id,
          name,
          weight,
          size,
          distanceFromSun,
          material,
          image,
          existenceYears
        }) => (
          <li key={id} className={s.item}>
            <img src={image} alt={name} width={160} className={s.image} />
            <div>
              <h3 className={s.title}>{name}</h3>
              <p className={s.text}>
                Weight: <span className={s.textAccent}>{weight}</span>
              </p>
              <p className={s.text}>
                Size: <span className={s.textAccent}>{size}</span>
              </p>
              <p className={s.text}>
                Distance from Sun:{" "}
                <span className={s.textAccent}>{distanceFromSun}</span>
              </p>
              <p className={s.text}>
                Material: <span className={s.textAccent}>{material}</span>
              </p>
              <p className={s.text}>
                Old: <span className={s.textAccent}>{existenceYears}</span>
              </p>
            </div>
          </li>
        )
      )}
    </>
  );
};

export default PlanetItem;
