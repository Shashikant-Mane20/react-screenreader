import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [announcedText, setAnnouncedText] = useState("");

  // Function to handle when a navbar item is clicked, announce text
  const handleClick = (text) => {
    setAnnouncedText(text);
    const liveRegion = document.getElementById("live-region");
    liveRegion.textContent = text; // Update the live region for screen readers
    console.log(`Announcing: ${text}`); // Debugging log
  };

  return (
    <div className="App">
      <Navbar handleClick={handleClick} />

      {/* Live Region for Screen Reader */}
      <div
        id="live-region"
        className="sr-only"
        aria-live="assertive"
      >
        {/* This is hidden visually but will be read out by screen readers */}
      </div>

      {/* Visually hidden section to make screen reader announce the text */}
      <p className="mt-4 text-center text-gray-600">
        Last Tapped Item: <strong>{announcedText}</strong>
      </p>
    </div>
  );
}

export default App;
