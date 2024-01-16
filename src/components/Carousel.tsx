import { useState } from "react";
import { Slide } from "../types";
import { ShopNow } from "./ShopNow";

import "./Carousel.css";
export const Carousel = ({ slides }: { slides: Slide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const slide = slides[currentSlide];

  return (
    <div className="carousel-container">
      <div key={slide.id} className="slide">
        <div className="img-container">
          <img src={`${slide.imageMobile}`} alt="" />
          <div className="button-container">
            <div className="button" onClick={prevSlide}>
              <img src="images/icon-angle-left.svg" alt="" />
            </div>
            <div className="button" onClick={nextSlide}>
              <img src="images/icon-angle-right.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="slide-content">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <ShopNow />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
