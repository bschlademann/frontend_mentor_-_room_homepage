import { useState } from "react";
import { Slide } from "../types";
import { ShopNow } from "./ShopNow";

export const Carousel = ({ slides }: { slides: Slide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === currentSlide && (
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <ShopNow/>
            </div>
          )}
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;