import React from "react";
import star_icon from "../assets/star_icon.svg";
import orange_star_icon from "../assets/orange_star_icon.svg";

const StarRating = ({ rating }) => {
  /*function testRating() {
   if (rating == 1) {
      return (
        <span>
          <img src={orange_star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
        </span>
      );
    } else if (rating == 2) {
      return (
        <span>
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
        </span>
      );
    } else if (rating == 3) {
      return (
        <span>
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
        </span>
      );
    } else if (rating == 4) {
      return (
        <span>
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={star_icon} alt="" />
        </span>
      );
    } else if (rating == 5) {
      return (
        <span>
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
          <img src={orange_star_icon} alt="" />
        </span>
      );
    }
  }*/

  const starsArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsArray.push(orange_star_icon);
    } else {
      starsArray.push(star_icon);
    }
  }

  return (
    <div>
      <span>
        {starsArray.map((e) => {
          return <img src={e} alt={e} />;
        })}
      </span>
    </div>
  );
};

export default StarRating;
