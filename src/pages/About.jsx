import { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import backgroundImg1 from "../assets/delkom1.jpg";

const About = () => {
  const [revealed, setRevealed] = useState(true); // Start with the text revealed

  const toggleReveal = () => {
    setRevealed(!revealed);
  };

  // Animation variants for pop-in effect
  const variants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start off-screen and smaller
    visible: { opacity: 1, scale: 1 }, // Scale to full size and full opacity
    exit: { opacity: 0, scale: 0.8 }, // Scale down and fade out
  };

  return (
    <>
      {/* Mobile & Tablet Section - Visible on screens smaller than 'lg' */}
      <motion.section
        className="w-full lg:hidden text-left tracking-normal text-primary flex justify-center bg-overlayPrimary"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }} // Adjust duration as needed
      >
        <div className="w-[85%] lg:w-[90%]">
          <div>
            <h2 className="headings text-white py-10 mb-4 font-bold text-center text-nunito">
              About <span className="text-darkYellow">Us</span>
            </h2>
          </div>
          <div>
            <img
              className="w-full object-cover max-h-[60vh] p-1 mx-auto rounded-xl"
              src={backgroundImg1}
              alt="Delkom Charity Foundation"
            />
            <div
              className="p-2 mx-auto text-xl leading-loose text-ptSans"
              onClick={toggleReveal}
            >
              {revealed ? (
                <>
                  Delkom Charity Foundation is a duly registered
                  non-governmental organization based in Ghana, with the aim of
                  fostering a brighter future for individuals through
                  collaborative efforts to empower and assist young, energetic
                  children residing in rural communities. Our targeted age group
                  ranges from 6 to 16 years old.
                  <span
                    onClick={toggleReveal}
                    className="cursor-pointer text-darkYellow"
                  >
                    read more...
                  </span>
                </>
              ) : (
                <>
                  Delkom Charity Foundation is a duly registered
                  non-governmental organization based in Ghana, with the aim of
                  fostering a brighter future for individuals through
                  collaborative efforts to empower and assist young, energetic
                  children residing in rural communities. Our targeted age group
                  ranges from 6 to 16 years old. At the core of our programs, we
                  prioritize various initiatives designed to make a positive
                  impact in the lives of these children. This includes the
                  provision of essential school supplies, comprehensive ICT and
                  digital training, opportunities for creative writing and
                  crafting, empowerment activities, Mentorship programs, and
                  coaching sessions.
                  <span
                    onClick={toggleReveal}
                    className="cursor-pointer text-darkYellow"
                  >
                    read less...
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Desktop Section - Visible on screens 'lg' and larger */}
      <motion.section
        className="bg-primaryDark hidden lg:block w-full min-h-[600px] mx-auto px-2"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }} // Adjust duration as needed
      >
        <div className="w-[80%] lg:w-[90%] lg:grid lg:grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-5 lg:min-h-[600px] flex justify-center items-center">
            <img
              className="h-auto max-w-full mt-4 rounded-xl"
              src={backgroundImg1}
              alt="Delkom Charity Foundation"
            />
          </div>
          <div className="xl:col-span-7 lg:min-h-[400px] flex flex-col justify-center">
            <h2 className="text-4xl text-white font-bold text-center text-nunito">
              About
              <span className="text-darkYellow"> Us </span>
            </h2>
            <p className="mt-2 text-xl leading-relaxed text-ptSans capitalize-none text-white">
              Delkom Charity Foundation is a duly registered non-governmental
              organization based in Ghana, with the aim of fostering a brighter
              future for individuals through collaborative efforts to empower
              and assist young, energetic children residing in rural
              communities. Our targeted age group ranges from 6 to 16 years old.
              At the core of our programs, we prioritize various initiatives
              designed to make a positive impact in the lives of these children.
              This includes the provision of essential school supplies,
              comprehensive ICT and digital training, opportunities for creative
              writing and crafting, empowerment activities, Mentorship programs,
              and coaching sessions.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
