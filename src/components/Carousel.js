import React from "react";
import { useState, useEffect } from "react";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";

const Carousel = ({ pictures, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = pictures.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  if (slideLength === 1) {
    return (
      <div className="img-container text-center">
        <img
          className="rounded w-75 mt-3 mb-3 banner"
          src={pictures}
          alt={title}
        />
      </div>
    );
  }

  return (
    <div className="slider w-75  mb-5">
      <img src={left_arrow} className="arrow prev" onClick={prevSlide} alt="" />
      <img
        src={right_arrow}
        className="arrow next"
        onClick={nextSlide}
        alt=""
      />
      {pictures.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide} alt={title} className="image" />
              </div>
            )}
            <p className="slide_lenght">
              {index + 1}/{slideLength}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
