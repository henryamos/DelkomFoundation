import React, { useState } from 'react';
import backgroundImg1 from "/assets/delkom1.jpg";

const About = () => {
  const [revealed, setRevealed] = useState(true); // Start with the text revealed

  const toggleReveal = () => {
    setRevealed(!revealed);
  };

  return (
    <>
      <section className=' max-w-[1640px] mx-auto px-0.2'>
        <div className='mt-8'>
          <h2 className='text-center text-nunito font-bold text-2xl'>About Us</h2>
        </div>
        <div className='mt-4'>
          <img className='w-full object-cover max-h-[40vh] p-1 mx-auto rounded-xl' src={backgroundImg1} alt="" />
          <p className='text-ptSans p-2 mx-auto' onClick={toggleReveal}>
            {revealed ? (
              <>
                Delkom Charity Foundation is a duly registered non-governmental organization based in Ghana, with the aim of fostering a brighter future for individuals through collaborative efforts to empower and assist young, energetic children residing in rural communities. Our targeted age group ranges from 6 to 16 years old.
                At the core of our programs, we prioritize various initiatives designed to make a positive impact in the lives of these children. This includes the provision of essential school supplies, comprehensive ICT and digital training, opportunities for creative writing and crafting, empowerment activities, Mentorship programs, and coaching sessions.
              </>
            ) : (
              <>
                {' '}
                Delkom Charity Foundation is a duly registered non-governmental organization based in Ghana, with the aim of fostering a brighter future for individuals through collaborative efforts to empower and assist young, energetic children residing in rural communities. Our targeted age group ranges from 6 to 16 years old.
                
                <span onClick={toggleReveal} className='text-blue cursor-pointer'>read more...</span>
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
