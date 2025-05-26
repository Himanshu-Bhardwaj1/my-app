import React from 'react';
import TapToReveal from './TapToReveal'; // Import the TapToReveal component
import './MemoriesGallery.css'; // Create this CSS file for styling

function MemoriesGallery() {
  const memories = [
    {
      id: 1,
      imgSrc: "/assets/diva.jpeg", // Make sure this path is correct
      altText: "My sexy diva",
      message: "My heart skips a beat whenever I saw you. ❤️"
    },
    {
      id: 2,
      imgSrc: "/assets/us.jpeg", // Make sure this path is correct
      altText: "That silly selfie we took",
      message: "This picture always makes me smile. You're the cutest when you're being silly! 🥰"
    },
    {
      id: 3,
      imgSrc: "/assets/a1.jpeg", // Add more photos to your public/photos folder!
      altText: "Pretty You",
      message: "My Pretty little baby, I am so in love with you 😍"
    },
    {
      id: 4,
      imgSrc: "/assets/me.jpeg", // Add more photos!
      altText: "Your silly little Bubba",
      message: "Stupid little kiddo 👶🏻"
    },
    // Add more memory objects as desired!
  ];

  return (
    <div className="memories-gallery-container">
      <h2>Our Lovely Moments</h2>
      <p className="gallery-intro-text">Tap on each moment to reveal a special memory!</p>
      <div className="memories-grid">
        {memories.map((memory) => (
          <div key={memory.id} className="memory-card">
            <TapToReveal revealText="Tap to relive this moment!" icon="✨">
              {/* Content to be revealed for each memory */}
              <img src={memory.imgSrc} alt={memory.altText} className="memory-image" />
              <p className="memory-message">{memory.message}</p>
            </TapToReveal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoriesGallery;
