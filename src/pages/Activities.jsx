import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { actvitiesData } from '../components/data/data';
import SkeletonCard from '../components/SkeletonCard';

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
    <motion.section
      className="px-8 py-4 w-full text-overlay bg-bgDark"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-nunito text-white font-bold headings mb-8">
        Out Reach <span className="text-darkYellow">Activities</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 text-ptSans">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          activities.map((activity) => (
            <motion.div
              className="shadow-xl bg-primary rounded-lg hover:scale-95 duration-300"
              key={activity.id}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-[300px] object-cover rounded-t-md"
                src={activity.imgUrl}
                alt={activity.title}
              />
              <div className="flex flex-col px-6 py-4 min-h-[200px]">
                <h3 className="font-bold text-dark text-xl">{activity.title}</h3>
                <p className="text-xl mt-4 capitalize-none">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default Activities;