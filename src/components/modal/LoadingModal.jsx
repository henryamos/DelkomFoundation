import React, { useEffect, useState } from "react";
import "./LoadingModal.css"; // Import the CSS for animations

const LoadingModal = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const letters = "DELKOM";

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev < letters.length) {
          return prev + 1; // Show the next letter
        } else {
          // Reset to show letters again
          return 0; // Reset to 0 to start over
        }
      });
    }, 200); // Adjust the timing as needed (500ms for each letter)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50">
      <div className="text-center">
        <div className="loader mb-4"></div> {/* Loader at the top */}
        <h1 className="text-5xl font-bold">
          {letters.split("").map((letter, index) => (
            <span
              key={index}
              className={`letter ${
                index < visibleLetters
                  ? "fade-in text-darkYellow"
                  : "text-primary invisible"
              }`}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default LoadingModal;
