import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ detail }) => {
  return (
    <div className="meals">
      {!detail
        ? "No Data"
        : detail.map((item) => (
            <div className="mealImg" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.name}</p>
              <NavLink to={`/${item.id}`}>
                <button>Recipe</button>
              </NavLink>
            </div>
          ))}
    </div>
  );
};

export default Cards;