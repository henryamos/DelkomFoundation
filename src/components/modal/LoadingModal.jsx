import React from "react";
import "./LoadingModal.css"; // Import the CSS for animations

const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="text-center">
        <div className="loader mb-4"></div>
        <h1 className="text-5xl font-bold text-darkYellow animate-fadeIn">
          {Array.from("DELKOM").map((letter, index) => (
            <span key={index} className={`letter-${index}`}>{letter}</span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default LoadingModal;
