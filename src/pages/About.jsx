import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backgroundImg1 from "../assets/delkom1.jpg";

const About = () => {
  const navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const handleReadMore = () => {
    navigate('/about-details');
  };

  const shortText = "Delkom Charity Foundation is a duly registered non-governmental organization based in Ghana, with the aim of fostering a brighter future for individuals through collaborative efforts to empower and assist young, energetic children residing in rural communities. Our targeted age group ranges from 6 to 16 years old.";

  return (
    <>
      {/* Mobile & Tablet Section */}
      <motion.section
        className="w-full lg:hidden bg-overlayPrimary"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[90%] md:w-[80%] mx-auto py-12">
          <h2 className="headings text-white mb-8 font-bold text-center text-nunito">
            About <span className="text-darkYellow">Us</span>
          </h2>
          
          <div className="w-full">
            <img
              className="w-full object-cover h-[300px] md:h-[400px] rounded-xl mb-8"
              src={backgroundImg1}
              alt="Delkom Charity Foundation"
            />
            <div className="text-xl leading-relaxed text-white text-ptSans">
              {shortText}
              <span
                onClick={handleReadMore}
                className="cursor-pointer text-darkYellow ml-2 hover:underline"
              >
                read more...
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Desktop Section */}
      <motion.section
        className="bg-overlayPrimary hidden lg:block min-h-screen"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[90%] md:w-[80%] mx-auto py-16">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-5">
              <img
                className="w-full h-[600px] object-cover rounded-xl"
                src={backgroundImg1}
                alt="Delkom Charity Foundation"
              />
            </div>
            <div className="col-span-7">
              <h2 className="headings text-white mb-8 font-bold text-nunito">
                About <span className="text-darkYellow">Us</span>
              </h2>
              <div className="text-2xl leading-relaxed text-white text-ptSans">
                {shortText}
                <span
                  onClick={handleReadMore}
                  className="cursor-pointer text-darkYellow ml-2 hover:underline"
                >
                  read more...
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
