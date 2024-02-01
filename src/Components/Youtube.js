import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const YouTubeButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleYouTubeClick = () => {
    // Replace 'your-youtube-video-id' with the actual YouTube video ID
    const youtubeLink = `https://www.youtube.com/watch?v=your-youtube-video-id`;

    // Open the YouTube link in a new tab
    window.open(youtubeLink, "_blank");
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      {/* YouTube icon */}
      <div
        className="fixed bottom-5 right-16 bg-red-500 p-3 rounded-full cursor-pointer"
        onClick={handleYouTubeClick}
      >
        <FontAwesomeIcon icon={faYoutube} className="text-white" size="2x" />
      </div>

      {/* Pop-up component */}
      {isPopupOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg z-50">
          {/* Replace the iframe with your 3D walkthrough video */}
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-youtube-video-id"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={togglePopup}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default YouTubeButton;
