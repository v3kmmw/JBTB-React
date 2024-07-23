// src/Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import CSS file

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          <img src={slide.src} alt={`Slide ${index}`} className="slide-image" />
        </div>
      ))}
      <a className="prev" onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}>&#10094;</a>
      <a className="next" onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}>&#10095;</a>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
