import React, { useState } from 'react';
import backgroundImg1 from "/assets/delkom1.jpg";
import backgroundImg2 from "/assets/delkom2.jpg";

const About = () => {
  const [revealed, setRevealed] = useState(true); // Start with the text revealed

  const toggleReveal = () => {
    setRevealed(!revealed);
  };

  return (
    <>
      {/* Mobile & Tablet Section - Visible on screens smaller than 'lg' */}
      <section className='mx-auto px-4 mt-16 lg:hidden w-full'>
        <div className='mt-8'>
          <h2 className='text-center text-nunito font-bold text-2xl'>About Us</h2>
        </div>
        <div className='mt-4'>
          <img className='w-full object-cover max-h-[60vh] p-1 mx-auto rounded-xl ' src={backgroundImg1} alt="Delkom Charity Foundation" />
          <div className='text-ptSans p-2 mx-auto text-xl leading-loose' onClick={toggleReveal}>
            {revealed ? (
              <>
                Delkom Charity Foundation is a duly registered non-governmental organization based in Ghana, with the aim of fostering a brighter future for individuals through collaborative efforts to empower and assist young, energetic children residing in rural communities. Our targeted age group ranges from 6 to 16 years old.
                <span onClick={toggleReveal} className='text-blue cursor-pointer'>read more...</span>
              </>
            ) : (
              <>
                Delkom Charity Foundation is a duly registered non-governmental organization based in Ghana, with the aim of fostering a brighter future for individuals through collaborative efforts to empower and assist young, energetic children residing in rural communities. Our targeted age group ranges from 6 to 16 years old.
                At the core of our programs, we prioritize various initiatives designed to make a positive impact in the lives of these children. This includes the provision of essential school supplies, comprehensive ICT and digital training, opportunities for creative writing and crafting, empowerment activities, Mentorship programs, and coaching sessions.
                <span onClick={toggleReveal} className='text-blue cursor-pointer'>read less...</span>

              </>
            )}
          </div>
        </div>
      </section>

      {/* Desktop Section - Visible on screens 'lg' and larger */}
      <section className=' bg-secondary hidden lg:grid lg:grid-cols-1 xl:grid-cols-12 gap-6 w-full min-h-[600px]  mt-16'>
        <div className='xl:col-span-5 lg:min-h-[400px] flex justify-center items-center relative'>
          <img className='max-w-full h-auto p-1 rounded-xl' src={backgroundImg1} alt="Delkom Charity Foundation" />
          <img className='max-w-full h-[40%] p-1 rounded-xl absolute top-1/2 right-1/4 ' src={backgroundImg2} alt="Delkom Charity Foundation" />
        
        </div>
        <div className='xl:col-span-7 lg:min-h-[400px] flex flex-col justify-center'>
          <h2 className='text-center text-nunito font-bold text-4xl'>About Us</h2>
          <p className='text-ptSans mt-2 text-xl leading-relaxed'>
            Delkom Charity Foundation is a duly registered non-governmental organization based in Ghana, with the aim of fostering a brighter future for individuals through collaborative efforts to empower and assist young, energetic children residing in rural communities. Our targeted age group ranges from 6 to 16 years old.
            At the core of our programs, we prioritize various initiatives designed to make a positive impact in the lives of these children. This includes the provision of essential school supplies, comprehensive ICT and digital training, opportunities for creative writing and crafting, empowerment activities, Mentorship programs, and coaching sessions.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
