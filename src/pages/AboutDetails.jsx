import { motion } from "framer-motion";
import backgroundImg1 from "../assets/delkom1.jpg";

const AboutDetails = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.section
      className="bg-primaryDark w-full min-h-screen px-4 py-8"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-white font-bold text-center text-nunito mb-8">
          About <span className="text-darkYellow">Us</span>
        </h2>

        <img
          className="w-full h-auto rounded-xl mb-8"
          src={backgroundImg1}
          alt="Delkom Charity Foundation"
        />

        <div className="text-xl leading-relaxed text-ptSans text-white">
          <p className="mb-6">
            Delkom Charity Foundation is a duly registered non-governmental
            organization based in Ghana, with the aim of fostering a brighter
            future for individuals through collaborative efforts to empower and
            assist young, energetic children residing in rural communities. Our
            targeted age group ranges from 6 to 16 years old.
          </p>
          <p className="mb-6">
            At the core of our programs, we prioritize various initiatives
            designed to make a positive impact in the lives of these children.
            This includes the provision of essential school supplies,
            comprehensive ICT and digital training, opportunities for creative
            writing and crafting, empowerment activities, Mentorship programs,
            and coaching sessions.
          </p>
          {/* Add more paragraphs with additional information about the foundation */}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutDetails;
