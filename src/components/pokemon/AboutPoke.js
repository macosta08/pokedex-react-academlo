import { Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";
import CategoryIcon from "@material-ui/icons/Category";
import HeightIcon from "@material-ui/icons/Height";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import GradeIcon from "@material-ui/icons/Grade";
export const AboutPoke = () => {
  const [infoPoke, setInfoPoke] = useState(null);
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    const getPoke = async (
      endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
    ) => {
      const response = await request(endpoint);
      setInfoPoke(response.data);
    };
    if (location.state) {
      setInfoPoke(location.state);
    } else {
      getPoke();
    }
  }, [location, id]);
  return (
    <div>
      {infoPoke && (
        <div style={{ background: "#424242" }}>
          <div className="d-flex justify-content-center">
            <div
              className="card border-light mx-3 my-3"
              style={{ maxWidth: 288 }}
            >
              <h5 class=" card-header card-title">Types</h5>

              <div className="card-body">
                {infoPoke.types.map((t) => (
                  <Chip
                    icon={<CategoryIcon />}
                    key={t.type.name}
                    label={t.type.name}
                    style={{ color: "#fafafa", background: "#e57373" }}
                  />
                ))}
              </div>
            </div>
            <div
              className="card border-light mx-3 my-3"
              style={{ maxWidth: 288 }}
            >
              <h5 class=" card-header card-title">Height</h5>

              <div className="card-body">
                <Chip
                  icon={<HeightIcon />}
                  label={infoPoke.height}
                  style={{ color: "#fafafa", background: "#e57373" }}
                />
              </div>
            </div>
            <div
              className="card border-light mx-3 my-3"
              style={{ maxWidth: 288 }}
            >
              <h5 class=" card-header card-title">Weight</h5>

              <div className="card-body">
                <Chip
                  icon={<FitnessCenterIcon />}
                  label={infoPoke.weight}
                  style={{ color: "#fafafa", background: "#e57373" }}
                />
              </div>
            </div>
            <div
              className="card border-light mx-3 my-3"
              style={{ maxWidth: 288 }}
            >
              <h5 class=" card-header card-title">Order</h5>

              <div className="card-body">
                <Chip
                  icon={<LabelImportantIcon />}
                  label={infoPoke.order}
                  style={{ color: "#fafafa", background: "#e57373" }}
                />
              </div>
            </div>
            <div
              className="card border-light mx-3 my-3"
              style={{ maxWidth: 288 }}
            >
              <h5 class=" card-header card-title">Abilities</h5>

              <div className="card-body">
                {infoPoke.abilities.map((a) => (
                  <Chip
                    icon={<GradeIcon />}
                    key={a.ability.name}
                    label={a.ability.name}
                    style={{ color: "#fafafa", background: "#e57373" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
