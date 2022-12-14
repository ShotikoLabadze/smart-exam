import React from "react";
import "./Card.css";

const Card = ({ index, img, price, brand }) => {
  return (
    <div key={index} className="user-card" style={{ width: "18rem" }}>
      <img src={img} />
      <div className="user-card-body">
        <h3>{brand}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
