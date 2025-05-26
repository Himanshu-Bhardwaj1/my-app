import React, { useRef, useEffect } from 'react';

function AudioPlayer({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Adjust volume as needed
      audioRef.current.loop = true; // Loop the music
      // Try to autoplay, but browsers might block it.
      // You might need a small "play music" button if it's blocked.
      audioRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        // Optionally, display a small instruction to click to play music
      });
    }
  }, [src]);

  return (
    <audio ref={audioRef} src={src} preload="auto" />
  );
}

export default AudioPlayer;