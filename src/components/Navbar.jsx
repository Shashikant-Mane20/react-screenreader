import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(() => {
    return JSON.parse(localStorage.getItem('isSpeechEnabled')) || false;
  });

  useEffect(() => {
    localStorage.setItem('isSpeechEnabled', JSON.stringify(isSpeechEnabled));
  }, [isSpeechEnabled]);

  const speakText = (text) => {
    if (isSpeechEnabled) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = "en-US";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    const handleFocus = (event) => {
      const text = event.target.innerText || event.target.alt;
      if (text) {
        speakText(text);
      }
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('click', handleFocus);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('click', handleFocus);
    };
  }, [isSpeechEnabled]);

  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            className="text-white text-xl font-bold"
            aria-label="Homepage"
            tabIndex="0"
          >
            Blind Accessibility
          </a>
          <button
            onClick={() => setIsSpeechEnabled((prev) => !prev)}
            className={`ml-4 px-4 py-2 rounded ${
              isSpeechEnabled ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
            aria-label="Toggle speech functionality"
          >
            {isSpeechEnabled ? 'Speech ON' : 'Speech OFF'}
          </button>
        </div>
      </nav>

      <section className="bg-gray-50 text-center py-12">
        <p
          className="text-lg text-gray-700"
          tabIndex="0"
        >
          At Blind Accessibility, we are dedicated to creating digital experiences that are inclusive and accessible for all. Our mission is to break down barriers and provide solutions that empower blind and visually impaired users to navigate the web with ease. We aim to ensure that technology serves everyone, regardless of ability, by implementing innovative features like screen readers, voice commands, and customizable settings. Join us in making the digital world a more accessible place for all.
        </p>
      </section>

      <section className="bg-gray-100 text-center py-16">
        <h1 className="text-4xl font-bold text-blue-600" tabIndex="0">
          Welcome to Blind Accessibility
        </h1>
        <p className="text-lg mt-4" tabIndex="0">
          Empowering blind and visually impaired people with accessible digital experiences.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded"
          aria-label="Learn More about our mission"
          tabIndex="0"
        >
          Learn More
        </button>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-8" tabIndex="0">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="p-6 bg-white rounded shadow-lg"
              tabIndex="0"
            >
              <h3 className="text-xl font-semibold mb-4">Screen Reader Support</h3>
              <p>
                We provide full support for screen readers, ensuring that all content is accessible to visually impaired users.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded shadow-lg"
              tabIndex="0"
            >
              <h3 className="text-xl font-semibold mb-4">Voice Commands</h3>
              <p>
                Our website allows users to navigate with voice commands, making browsing more accessible.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded shadow-lg"
              tabIndex="0"
            >
              <h3 className="text-xl font-semibold mb-4">Customizable Text Size</h3>
              <p>
                Users can adjust the text size on the website to suit their visual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-8 text-center">
        <p tabIndex="0">
          &copy; 2024 Blind Accessibility. All rights reserved.
        </p>
        <p>
          <a
            href="/privacy-policy"
            className="underline"
            aria-label="Privacy Policy"
            tabIndex="0"
          >
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Navbar;








