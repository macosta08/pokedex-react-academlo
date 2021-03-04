import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { request } from "../../utils/HttpMethod";

export const EncountersPoke = () => {
  const [location, setLocation] = useState(null);

  const { id } = useParams();

  const getLocationArea = (locationArea) => {
    const arrLocArea = locationArea
      .split("-")
      .filter((str) => str.toLowerCase() !== "area");
    return {
      key: locationArea,
      region: arrLocArea[0],
      area: arrLocArea.slice(1, arrLocArea.length).join(" "),
    };
  };

  useEffect(() => {
    const getEncounters = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
    ) => {
      const response = await request(endpoint);
      const locArea = response.data.map((loc) =>
        getLocationArea(loc.location_area.name)
      );

      setLocation(locArea);
    };
    if (id) {
      getEncounters();
    }
  }, [id]);

  return (
    <div>
      {location && (
        <div>
          {location.length > 0 ? "Is found in:" : "Not Found"}

          {location.map((loc) => (
            <div key={loc.key}>
              <div>Region: {loc.region}</div>
              <div>Area: {loc.area}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
