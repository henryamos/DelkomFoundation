
import { actvitiesData } from '../components/data/data';

const Activities = () => {
  return (
    <section className='mx-auto px-8 mt-16  w-full bg-primary'>
      <h2 className='text-center text-nunito font-bold text-3xl mb-8'>Out Reach <span className='text-darkYellow'>Activities</span> </h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 pt-4 text-ptSans'>
      {actvitiesData.map((activity)=>(
         <div className=' shadow-xl rounded-lg pt-6 hover:scale-95 duration-300' key={activity.id}>
            <img className='w-full h-[300px]  object-cover rounded-t-md' src={activity.imgUrl} alt="" />
            <div className='flex flex-col px-6 py-4 min-h-[200px]'>
            <h3 className='font-bold text-xl'>{activity.title}</h3>
            <p className='text-xl mt-4 capitalize-none '>{activity.description}</p>
            </div>

         </div>
      ))}
    </div>

    </section>
  )
}

export default Activities;