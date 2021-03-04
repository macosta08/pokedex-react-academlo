import React from "react";

export const BaseStats = ({ stats }) => {
  return (
    <div>
      {stats.map((s) => (
        <div key={s.stat.name}>
          {s.stat.name}: {s.base_stat}
        </div>
      ))}
    </div>
  );
};
