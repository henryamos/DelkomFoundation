import  { useState } from 'react';
import { teamData } from './data/data'; // Import your data
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons
import useWindowWidth from '../hook/useWindowWidth';

const TeamCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = useWindowWidth();
  const isLargeScreen = windowWidth >= 1024;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const calculateTransform = () => {
    if (isLargeScreen) {
      return `translateX(-${(currentIndex % 3) * (100 / 3)}%)`;
    }
    return `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div className="relative w-full bg-dark  bg-opacity-90  py-8">
      <h2 className="text-2xl font-bold text-center text-white md:text-3xl mb-8">
        Meet Our <span className="text-darkYellow">Team</span>
      </h2>
      <div className="overflow-hidden relative mb-8"> {/* Added margin-bottom to create space for indicators */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: calculateTransform() }}
        >
          {teamData.map((member) => (
            <div
              key={member.id}
              className="w-full flex-shrink-0 lg:w-1/3 p-12"
            >
              <div className="w-full lg:max-w-md rounded-lg overflow-hidden shadow-lg bg-dark bg-opacity-90">
                <img
                  src={member.imgUrl}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-normal text-sm text-darkYellow">{member.role}</p>
                    <div className="flex space-x-2">
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full flex items-center justify-center hover:bg-darkYellow hover:text-dark transition-colors duration-300">
                        <FaLinkedin className="text-primary hover:text-dark w-4 h-4" />
                      </a>
                      <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full flex items-center justify-center hover:bg-darkYellow hover:text-dark transition-colors duration-300">
                        <FaInstagram className="text-primary hover:text-dark w-4 h-4" />
                      </a>
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full flex items-center justify-center hover:bg-darkYellow hover:text-dark transition-colors duration-300">
                        <FaTwitter className="text-primary hover:text-dark w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-darkYellow rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-6 transform -translate-y-1/2 p-2 bg-darkYellow rounded-full"
        >
          &gt;
        </button>
        <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-8 mt-4">
          {(isLargeScreen ? Array(3).fill(0) : teamData).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex % (isLargeScreen ? 3 : teamData.length) ? 'bg-darkYellow' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
