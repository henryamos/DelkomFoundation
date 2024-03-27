import React from 'react'
import { actvitiesData } from './data/data'
const TeamCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
      {actvitiesData.map((activity)=>(
         <div className='border shadow-lg rounded-lg hover:scale-95 duration-300' key={activity.id}>
            <img className='w-full h-[300px]  object-cover rounded-t-lg' src={activity.imgUrl} alt="" />
            <div className='flex flex-col justify-around sm:justify-between px-2 py-6'>
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            </div>

         </div>
      ))}
    </div>
  )
}

export default TeamCard