import React, { useState, useEffect } from 'react';
import backgroundImg1 from "/assets/delkom1.jpg";
import backgroundImg2 from "/assets/Delkom7.jpg";
import backgroundImg3 from "/assets/Delkom4.jpg";
import backgroundImg4 from "/assets/Delkom8.jpg";


const Home = () => {
  return (
    <>
      <HomeContent />
    </>
  );
};

export const HomeContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [backgroundImg1, backgroundImg2, backgroundImg3,backgroundImg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className='max-w-[1640px] mx-auto px-0.2'>
        <div className='max-h-[100vh] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full font-nunito text-primary max-h-[100vh] bg-dark/75 flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl sm:text-4xl font-bold md:text-5xl lg:text-6xl'>
              Welcome to <span className='text-darkYellow'> DelKom Charity </span> <br /> Foundation
            </h1>
            <div className='space-x-5 space-y-6 sm:space-x-12 sm:space-y-12'>
              <button className='btn-primary text-sm'>Join us</button>
              <button className='btn-secondary text-sm'>Donate</button>
            </div>
          </div>
          <img
            className='w-full max-h-[100vh] object-cover'
            src={images[currentImageIndex]}
            alt={`Background ${currentImageIndex + 1}`}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
