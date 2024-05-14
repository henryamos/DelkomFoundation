import React from 'react'
import backgroundImg1 from '/assets/Delkom9.jpg';
import booking from '../assets/map_school.svg';
import clothing from '../assets/game-icons_clothes.svg';
import food from '../assets/fluent_food-24-filled.svg'
const HumanityServiceCard = () => {
  return (
    <div className="w-full min-h-screen mx-auto bg-bgDark ">

      <div className='relative min-h-screen'>
        <h2 className='text-center text-primary'>Our <span className='text-darkYellow'>Humanity Service</span> </h2>
        <div className='absolute flex flex-col items-center justify-center w-full min-h-screen font-nunito text-primaryBase bg-dark/80 md:flex-row md:justify-around'>
            
            {/* Food Icons */}
            <div className='flex flex-col items-center justify-center w-1/2'>
            <img  className='w-12 md:w-24' src={food} alt="" />
            <h4 className='mt-4 mb-4 text-lg font-normal md:font-bold md:text-2xl'>Charity For Food</h4>
            <p className='text-center'>Our members volunteer to support and  <br className='hidden md:block' /> educate young children residing in rural areas</p>
            </div>
              {/*  Icons */}
            <div className='flex flex-col items-center justify-center w-1/2'>
            <img className='w-12 md:w-24' src={clothing} alt="" />
            <h3 className='mt-4 mb-4 text-lg font-normal md:font-bold md:text-2xl'>Charity For Clothes</h3>
            <p className='text-center'>Our members volunteer to support and <br />  educate young children residing in rural areas</p>
           </div>
           <div className='flex flex-col items-center justify-center w-1/2'>
            <img className='w-12 md:w-24' src={booking} alt="" />
            <h3 className='mt-4 mb-4 font-normal md:font-bold text-md md:text-2xl'>Charity For Education</h3>
            <p className='text-center'>Our members volunteer to support and <br />  educate young children residing in rural areas</p>
            </div>
           
        </div>
        <img className='object-cover w-full min-h-screen' src={backgroundImg1} alt="" />
      </div>
    </div>
  )
}

export default HumanityServiceCard