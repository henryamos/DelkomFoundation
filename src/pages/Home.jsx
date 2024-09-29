import { useState, useEffect } from 'react';
import backgroundImg1 from "/assets/delkom1.jpg";
import backgroundImg2 from "/assets/Delkom7.jpg";
import backgroundImg3 from "/assets/Delkom4.jpg";
import backgroundImg4 from "/assets/Delkom10.jpg";
import About from './About';
import OurImpact from './OurImpact';
import Activities from './Activities';
import Team from './Team';


const Home = () => {
  return (
    <>
      <HomeContent />
      <About/>
      <br />
      <Activities/>
      <OurImpact/>
     <Team/>
    </>
  );
};

export const HomeContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="h-[80vh]  lg:h-[100vh] w-screen  ">
        <div
          style={{ backgroundImage: "url(" + images[currentImageIndex] + ")" }}
          className="w-full h-full bg-cover"
        >
          <div className="flex flex-col items-center justify-center min-h-full font-nunito text-primary bg-dark/75 ">
            <h1 className="text-[2.5rem] leading-[1.1] font-bold text-center sm:text-3xl md:text-5xl lg:text-[5rem]">
              Welcome to{" "}
              <span className="text-darkYellow"> DelKom Charity </span>{" "}
              Foundation
            </h1>
            <p className="w-[90%] lg:w-[80%] mx-auto text-center leading-7 pt-4">
              Our mission is to empower children in
              deprived communities through practical ICT/IT training, creative
              writing and crafting, Mentorship, and supporting them with
              educational stationery.
            </p>
            <div className="space-x-5 space-y-6 sm:space-x-12 sm:space-y-12">
              <button className="text-sm btn-primary">Join us</button>
              <button className="text-sm btn-outline">Donate</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
