import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

const Card = ({ img, heading, lang, ratings, id }) => {
  return (
    <div>
      <div className="card">
        <div className="card_img">
          <img src={img} alt="shows" />
        </div>
        <div className="card_desc">
          <h2>{heading}</h2>
          <h4>Language : {lang}</h4>
          <h4>Ratings : {ratings} /10</h4>
        </div>

        <div className="footer">
          <Link to={`show/${id}`}>Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
