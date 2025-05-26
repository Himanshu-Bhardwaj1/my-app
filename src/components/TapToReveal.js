import React, { useState } from 'react';
import './TapToReveal.css';

function TapToReveal({ children, revealText = "Tap to Reveal My Love", icon = "💖" }) {
  const [revealed, setRevealed] = useState(false);

  const handleTap = () => {
    setRevealed(true);
  };

  return (
    <div className="tap-to-reveal-container">
      {!revealed ? (
        <div className="tap-to-reveal-hidden" onClick={handleTap}>
          <span className="tap-icon">{icon}</span>
          <p className="tap-text">{revealText}</p>
        </div>
      ) : (
        <div className="tap-to-reveal-revealed">
          {children} {/* This is where your hidden content goes */}
        </div>
      )}
    </div>
  );
}

export default TapToReveal;