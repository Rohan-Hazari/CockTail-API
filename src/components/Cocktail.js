import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, info, glass, id }) => {
  return (
    <article>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn-primary btn">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
