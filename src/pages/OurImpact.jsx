import React from 'react'
import HumanityServiceCard from '../components/HumanityService';
import ImpactStats from './ImpactStats';

const OurImpact = () => {
  return (
    <section className='px-4 mx-auto mt-10  '>

      <HumanityServiceCard />
      <ImpactStats/>
    </section>
    
  )
}

export default OurImpact;