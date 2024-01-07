import React, { useState } from 'react';


export const Carousel = ({ slides }) => {
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
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === currentSlide && (
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button onClick={slide.action}>Shop Now</button>
            </div>
          )}
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;



// export const Carousel = () => {

    

//     // logo.svg here
//     return <>

// Discover innovative ways to decorate

// We provide unmatched quality, comfort, and style for property owners across the country. 
// Our experts combine form and function in bringing your vision to life. Create a room in your 
// own style with our collection and make your property a reflection of you and what you love.


// We are available all across the globe

// With stores all over the world, it's easy for you to find furniture for your home or place of business. 
// Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
// store locator. Any questions? Don't hesitate to contact us today.



// Manufactured with the best materials

// Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
// to ensure that every product is made as perfect and as consistent as possible. With three decades of 
// experience in this industry, we understand what customers want for their home and office.

//     </>
// }


