import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import EncouragementCarousel from './components/EncouragementCarousel';
import TapToReveal from './components/TapToReveal'; // Import the new component
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <AudioPlayer src="/music/your-love-song.mp3" /> {/* Ensure this path is correct */}
      <LandingPage />
      <EncouragementCarousel />

      {/* NEW SECTION: Tap to Reveal */}
      <TapToReveal revealText="Tap to see a special message just for you!" icon="💌">
        {/* Content to be revealed */}
        <p className="revealed-message">
          My dearest Bubba,<br/><br/>
          No matter what today brings, always remember how much I adore you.
          You're my sunshine, my strength, and my greatest adventure.
          I'm so incredibly proud of you and excited for this new chapter.
          Go out there and conquer! My heart is always with you.
          <br/><br/>
          With all my love,<br/>
          Bubba
        </p>
        <img
          src="./assets/a1.jpeg" // Path to your first photo in the public folder
          alt="A lovely memory of us"
        />
         <img
          src="./assets/a2.jpeg" // Path to your second photo
          alt="Another cherished moment"
          style={{ marginTop: '20px' }} // Add some spacing between photos
        />
        {/* You can add more photos or even a small gallery component here */}
      </TapToReveal>

      {/* Add other components as you create them */}
    </div>
  );
}

export default App;