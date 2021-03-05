import { Chip } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { request } from "../../utils/HttpMethod";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
export const MovesPoke = () => {
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
    <div style={{ background: "#424242" }}>
      <div className="d-flex justify-content-center">
        {infoPoke && infoPoke.moves.length > 0 ? (
          <div className="card border-light mb-3">
            <h5 className="card-header card-title">Moves</h5>
            <div className="card-body">
              {infoPoke.moves.map((m) => (
                <Chip
                  icon={<CheckCircleIcon />}
                  key={m.move.name}
                  label={m.move.name}
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
    </div>
  );
};
