import { Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { request } from "../../utils/HttpMethod";
import LocationOnIcon from "@material-ui/icons/LocationOn";
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
    <div style={{ background: "#424242" }}>
      {location && (
        <div className="d-flex justify-content-center">
          {location.length > 0 ? (
            <div className="card border-light mx-3 my-3">
              <h5 class=" card-header card-title">Location</h5>

              <div className="card-body">
                {location.map((loc) => (
                  <Chip
                    icon={<LocationOnIcon />}
                    key={loc.key}
                    label={`Region: ${loc.region}   Area: ${loc.area}`}
                    style={{ color: "#fafafa", background: "#e57373" }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div class="alert alert-dark mt-3" role="alert">
              Not Found!!!
            </div>
          )}
        </div>
      )}
    </div>
  );
};
