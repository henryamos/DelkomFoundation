import React from 'react'
import backgroundImg from "/assets/delkom1.jpg"
const Home = () => {
  return (
    <>
    <HomeContent/>
    </>
  )
}

export const HomeContent=()=>{
  return(
    <>
     <section className='max-w-[1640px] mx-auto px-0.2'>
      <div className='max-h-[100vh] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full font-nunito text-primary max-h-[100vh]  bg-dark/75 flex flex-col justify-center items-center '>
            <h1 className='text-center text-2xl sm:text-4xl font-bold md:text-6xl '>Welcome  to  <span className='text-darkYellow '> DelKom Charity  </span> <br />Foundation</h1>
            <div className='space-x-5 space-y-6 sm:space-x-12 sm:space-y-12'>
            <button className='btn-primary   text-sm'>Join us</button>
            <button className='btn-secondary   text-sm'>Donate</button>
            </div>
            
        </div>
          <img 
            className='w-full max-h-[100vh] object-cover '
           src={backgroundImg} alt="" />
      </div>

     </section>
    </>
  )
}

export default Home;