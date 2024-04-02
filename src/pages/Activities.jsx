import React from 'react'
import { actvitiesData } from '../components/data/data';

const Activities = () => {
  return (
    <section className='mx-auto px-4 mt-16  w-full'>
      <h2 className='text-center text-nunito font-bold text-3xl mb-8'>Our Activities</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-ptSans'>
      {actvitiesData.map((activity)=>(
         <div className='border shadow-xl rounded-lg pt-6 hover:scale-95 duration-300' key={activity.id}>
            <img className='w-full h-[300px]  object-cover rounded-t-md' src={activity.imgUrl} alt="" />
            <div className='flex flex-col px-2 py-4 min-h-[200px]'>
            <h3 className='font-bold text-xl'>{activity.title}</h3>
            <p className='text-xl mt-4 ]'>{activity.description}</p>
            </div>

         </div>
      ))}
    </div>

    </section>
  )
}

export default Activities;