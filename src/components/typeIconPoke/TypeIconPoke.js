import React, { useEffect, useState } from "react";
import { typePokeBckg } from "../../utils/typePokeBckg";
import "./typeIconPoke.css";
export const TypeIconPoke = ({ types }) => {
  const [typesIcon, setTypesIcon] = useState([]);

  const typeIcon = (type) => {
    const typeExist = typePokeBckg.hasOwnProperty(type);

    return typeExist ? typePokeBckg[type].bckgIcon : null;
  };

  useEffect(() => {
    if (types) {
      const arr = types.map((t) => typeIcon(t.type.name));
      setTypesIcon(arr);
    }
  }, [types]);
  return (
    <div className=" iconType-conten">
      {typesIcon.map((typeIcon) => (
        <div
          key={typeIcon}
          className=" poke-type-icon"
          style={{ backgroundImage: typeIcon }}
        ></div>
      ))}
    </div>
  );
};
