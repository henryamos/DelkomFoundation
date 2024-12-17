import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGift, FaHandsHelping, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventCampaign = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const eventDate = new Date('2024-12-24T00:00:00');
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-darkShade to-bgDark py-16">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-darkYellow to-yellow-500 p-6 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-dark text-center mb-2">
              Join Us Spread Joy This Christmas
            </h2>
            <p className="text-center text-dark text-lg md:text-xl">
              Hillary Bassuah's Outreach '24
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Event Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-3xl text-darkYellow" />
                <div>
                  <h3 className="font-bold text-xl text-dark">Date</h3>
                  <p className="text-gray-600">24th-28th December, 2024</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-3xl text-darkYellow" />
                <div>
                  <h3 className="font-bold text-xl text-dark">Venue</h3>
                  <p className="text-gray-600">Nyameani - Twifo Hemang Lower Denkyira</p>
                </div>
              </div>

              {/* Countdown Timer */}
              {timeLeft && (
                <div className="bg-gray-100 rounded-xl p-4">
                  <h3 className="text-center font-bold text-lg mb-4">Event Starts In:</h3>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-dark text-white rounded-lg p-2">
                      <div className="text-2xl font-bold">{timeLeft.days}</div>
                      <div className="text-sm">Days</div>
                    </div>
                    <div className="bg-dark text-white rounded-lg p-2">
                      <div className="text-2xl font-bold">{timeLeft.hours}</div>
                      <div className="text-sm">Hours</div>
                    </div>
                    <div className="bg-dark text-white rounded-lg p-2">
                      <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                      <div className="text-sm">Mins</div>
                    </div>
                    <div className="bg-dark text-white rounded-lg p-2">
                      <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                      <div className="text-sm">Secs</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Get Involved Section */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaHandsHelping className="text-3xl text-darkYellow" />
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Volunteer Opportunities</h3>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Coordinate Activities</li>
                    <li>Setup Crew</li>
                    <li>Food Preparation</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaGift className="text-3xl text-darkYellow" />
                <div>
                  <h3 className="font-bold text-xl text-dark mb-2">Donation Needs</h3>
                  <ul className="text-gray-600 list-disc list-inside space-y-1">
                    <li>Non-Perishable Food Items</li>
                    <li>Clothing</li>
                    <li>Toiletries</li>
                    <li>Books</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link 
                  to="/volunteer" 
                  className="bg-dark hover:bg-darkYellow text-white hover:text-dark py-3 px-6 rounded-lg text-center transition-colors duration-300 flex-1"
                >
                  Volunteer Now
                </Link>
                <Link 
                  to="/donatePage" 
                  className="bg-darkYellow hover:bg-dark text-dark hover:text-white py-3 px-6 rounded-lg text-center transition-colors duration-300 flex-1"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>

          {/* Footer - Contact Info */}
          <div className="bg-gray-100 p-6 text-center">
            <p className="text-gray-600">
              For More Information, Contact Us: 
              <span className="font-bold text-dark ml-2">054-8151-982 / 054-5752-315</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCampaign; 