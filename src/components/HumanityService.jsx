import React from 'react'
import backgroundImg1 from '/assets/Delkom9.jpg';
import booking from '../assets/map_school.svg';
import clothing from '../assets/game-icons_clothes.svg';
import food from '../assets/fluent_food-24-filled.svg'
const HumanityServiceCard = () => {
  return (
    <div className="w-full mx-auto  h-[550px]   bg-bgDark ">

      <div className='h-[500px] relative'>
        <h2 className='text-center text-primary'>Our <span className='text-darkYellow'>Humanity Service</span> </h2>
        <div className='absolute w-full   font-nunito text-primaryBase h-[500px] bg-dark/80 flex flex-col justify-center items-center md:flex-row md:justify-around'>
            
            {/* Food Icons */}
            <div className='flex flex-col  w-1/2  justify-center items-center'>
            <img  className='w-12 md:w-24' src={food} alt="" />
            <h3 className='font-normal text-lg md:font-bold md:text-2xl mt-4 mb-4'>Charity For Food</h3>
            <p className='text-center'>Our members volunteer to support and  <br className='hidden md:block' /> educate young children residing in rural areas</p>
            </div>
              {/*  Icons */}
            <div className='flex flex-col  w-1/2  justify-center items-center'>
            <img className='w-12 md:w-24' src={clothing} alt="" />
            <h3 className='font-normal text-lg md:font-bold md:text-2xl mt-4 mb-4'>Charity For Clothes</h3>
            <p className='text-center'>Our members volunteer to support and <br />  educate young children residing in rural areas</p>
           </div>
           <div className='flex flex-col  w-1/2  justify-center items-center'>
            <img className='w-12 md:w-24' src={booking} alt="" />
            <h3 className='font-normal md:font-bold text-md md:text-2xl mt-4 mb-4'>Charity For Education</h3>
            <p className='text-center'>Our members volunteer to support and <br />  educate young children residing in rural areas</p>
            </div>
           
        </div>
        <img className='w-full h-[500px] object-cover' src={backgroundImg1} alt="" />
      </div>
    </div>
  )
}

export default HumanityServiceCard