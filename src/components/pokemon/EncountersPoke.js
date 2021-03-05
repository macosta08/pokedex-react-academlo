import { Button, Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Spinner } from "../spinner/Spinner";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import red from "@material-ui/core/colors/red";
export const EncountersPoke = ({ history }) => {
  const [location, setLocation] = useState(null);
  const [infoPoke, setInfoPoke] = useState(null);
  const [pokeName, setPokeName] = useState(null);

  const { id } = useParams();

  const locationInfo = useLocation();
  const transformName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

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
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
      setPokeName(transformName(response.data.name));
    };
    if (locationInfo.state) {
      setInfoPoke(locationInfo.state);
      setPokeName(transformName(locationInfo.state.name));
    } else {
      getPoke();
    }
  }, [locationInfo, id]);

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

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack(); 
    }
  };

  return (
    <div>
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <Button onClick={handleReturn}>
            <ArrowBackIcon style={{ fontSize: 35, color: red[600] }} />
          </Button>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {!infoPoke && !location && <Spinner />}
        {infoPoke && location && (
          <div>
            <h3 className="card-title">{pokeName}</h3>
            <div className="d-flex justify-content-center mt-3">
              <img
                style={{ width: 250 }}
                src={infoPoke.sprites.other["official-artwork"].front_default}
                alt={infoPoke.name}
              />
            </div>

            {location.length > 0 ? (
              <div className="card border-light mx-3 my-3">
                <h5 className=" card-header card-title">Location</h5>

                <div className="card-body">
                  {location.map((loc) => (
                    <Chip
                      icon={<LocationOnIcon />}
                      key={loc.key}
                      label={`Region: ${loc.region}   Area: ${loc.area}`}
                      style={{
                        color: "#fafafa",
                        background: "#e53935",
                        margin: 3,
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="alert alert-dark mt-3" role="alert">
                Not Found!!!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
