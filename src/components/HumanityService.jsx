import React from 'react'

const HumanityServiceCard = ({title,description}) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      {/* <div className="text-yellow-500">{icon}</div> */}
      <h3 className="mt-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
const HumanityService = () => {
  return (
    <div className=" bg-cover bg-center text-white py-12" style={{ backgroundImage: 'url(/assets/Delkom5.jpg)' }}>
      <div className="container mx-auto px-4">
        <div className="text-4xl font-bold mb-6">Our Services To Humanity</div>
        <div className="flex justify-around">
          <HumanityService
            // icon={<i className="fas fa-book"></i>} 
            title="Charity For Education" 
            description="Our members volunteer to support and educate young children residing in rural areas" 
          />
          <HumanityService
            icon={<i className="fas fa-utensils"></i>} 
            title="Charity For Food" 
            description="Our members volunteer to support and educate young children residing in rural areas" 
          />
          <HumanityService
            // icon={<i className="fas fa-tshirt"></i>} 
            title="Charity For Clothes" 
            description="Our members volunteer to support and educate young children residing in rural areas" 
          />
        </div>
      </div>
    </div>
  );
};

export default HumanityServiceCard