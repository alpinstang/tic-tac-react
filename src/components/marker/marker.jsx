import React from "react";
import "./marker.scss";


const Marker = (props) => {
  const { player, display } = props;
  return (
    <div className={`${player} ${display}`}>
      {player === "Player One" ? (
        <img alt="x" src={x} />
      ) : (
        <img alt="o" src={o} />
      )}
    </div>
  );
};

export default Marker;
