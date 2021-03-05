import React from "react";
import { Chip } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const MovesPoke = ({ infoPoke }) => {
  return (
    <div>
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
