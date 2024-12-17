import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { actvitiesData } from '../components/data/data';
import SkeletonCard from '../components/SkeletonCard';
import EventCampaign from '../components/EventCampaign';

const Activities = () => {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setActivities(actvitiesData);
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="bg-bgDark">
      {/* Event Campaign Section */}
      <EventCampaign />
      
      {/* Past Activities Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="headings text-center text-white font-bold mb-12">
            Our <span className="text-darkYellow"> Activities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            ) : (
              activities.map((activity) => (
                <motion.div
                  className="bg-primary rounded-lg shadow-xl hover:scale-95 duration-300 w-full"
                  key={activity.id}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-t-lg"
                    src={activity.imgUrl}
                    alt={activity.title}
                  />
                  <div className="flex flex-col p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 md:mb-6">
                      {activity.title}
                    </h3>
                    <p className="text-lg md:text-xl text-overlay">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Activities;