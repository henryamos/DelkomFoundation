import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImg1 from "../assets/delkom1.jpg";
import backgroundImg2 from "../assets/Delkom9.jpg";
import backgroundImg3 from "../assets/Delkom11.jpg";
import backgroundImg4 from "../assets/Delkom10.jpg";
import backgroundImge5 from "../assets/background5.jpg";
import About from "./About";
import OurImpact from "./OurImpact";
import Activities from "./Activities";
import Team from "./Team";
import DonationPage from "./DonationPage";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <Activities />
      <OurImpact />
      <DonationPage />
      <Team />
      <ContactUs />
    </>
  );
};

export const HomeContent = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: backgroundImg1,
      text: "Our mission is to empower children in deprived communities through practical ICT training.",
    },
    {
      image: backgroundImge5,
      text: "Join us in our efforts to provide creative writing and crafting workshops for children.",
    },
    {
      image: backgroundImg2,
      text: "We believe in mentorship and supporting children with educational stationery.",
    },
    {
      image: backgroundImg3,
      text: "Together, we can make a difference in the lives of these children.",
    },
    {
      image: backgroundImg4,
      text: "Your support can help us reach more children in need.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Background image animation variants
  const backgroundVariants = {
    enter: { scale: 1.1, opacity: 0 },
    center: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 }
  };

  // Slide text animation variants
  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="h-[90vh] lg:h-[100vh] w-full relative overflow-hidden">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial="enter"
          animate="center"
          exit="exit"
          variants={backgroundVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-dark/75">
        <div className="flex flex-col items-center justify-center min-h-full font-nunito text-primary">
          <div className="w-[90%] md:w-[80%] mx-auto">
            {/* Static Foundation Name */}
            <h1 className="text-[2.5rem] leading-[1.1] font-bold text-center sm:text-3xl md:text-5xl lg:text-[3.5rem] mb-6">
              <span className="text-darkYellow">DelKom Charity</span>{" "}
              Foundation
            </h1>

            {/* Animated Slide Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`text-${currentSlide}`}
                initial="enter"
                animate="center"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center leading-9 text-xl md:text-2xl mb-12 pt-4 max-w-4xl mx-auto"
              >
                {slides[currentSlide].text}
              </motion.p>
            </AnimatePresence>

            {/* Static Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                className="text-md btn-primary w-full sm:w-auto"
                onClick={() => navigate('/volunteer')}
              >
                Join us
              </button>
              <Link to="/donatePage" className="w-full sm:w-auto">
                <button className="text-md btn-outline w-full">
                  Donate
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-darkYellow w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
