import React from "react";
import star_icon from "../assets/star_icon.svg";
import orange_star_icon from "../assets/orange_star_icon.svg";

const StarRating = ({ rating }) => {
  const starsArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsArray.push(orange_star_icon);
    } else {
      starsArray.push(star_icon);
    }
  }

  return (
    <div className="rating">
      <span>
        {starsArray.map((star, index) => {
          return (
            <img className="star_icon" key={index} src={star} alt={star} />
          );
        })}
      </span>
    </div>
  );
};

export default StarRating;
