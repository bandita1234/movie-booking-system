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
          <h6>Language : {lang}</h6>
          <h5>Ratings : {ratings} /10</h5>
        </div>

        <div className="footer">
          <Link to={`show/${id}`}>Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
