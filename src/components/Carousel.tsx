import { useState } from "react";
import { Slide } from "../types";
import { ShopNow } from "./ShopNow";
import { Navigation } from "./Navigation";

// import "./Carousel.css";
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
      <div className="slides-wrapper">
        <div key={slide.id} className="slide">
          <div className="image-container" style={{ backgroundImage: `url(${slide.image})` }}>
            <Navigation/>
            <div className="button-container">
              <button className="prev" onClick={prevSlide}>
                &#10094;
              </button>
              <button className="next" onClick={nextSlide}>
                &#10095;
              </button>
            </div>
          </div>

          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>

          <ShopNow />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
