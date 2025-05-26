// src/components/EncouragementCarousel.js
import React, { useState } from 'react';
import './EncouragementCarousel.css';

function EncouragementCarousel() {
  const messages = [
    "Believe in yourself, my love. You've got this!",
    "Every challenge is a stepping stone. Shine brightly!",
    "Remember how amazing you are. You're going to rock it!",
    "I'm so incredibly proud of you, today and always.",
    "No matter what, I'm always here cheering you on."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <p className="message-display">{messages[currentIndex]}</p>
      <div className="carousel-controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
}

export default EncouragementCarousel;