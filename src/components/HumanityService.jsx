import backgroundImg1 from '../assets/Delkom9.jpg';
import booking from '../assets/map_school.svg';
import clothing from '../assets/game-icons_clothes.svg';
import food from '../assets/fluent_food-24-filled.svg';

const HumanityServiceCard = () => {
  const services = [
    {
      icon: food,
      title: "Food Support",
      description: "Providing nutritious meals and food supplies to communities in need, ensuring no one goes hungry."
    },
    {
      icon: clothing,
      title: "Clothing Distribution",
      description: "Distributing clothing to those in need, helping to provide dignity and protection to vulnerable individuals."
    },
    {
      icon: booking,
      title: "Educational Support",
      description: "Supporting education initiatives and providing learning resources to children in rural areas."
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-bgDark">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={backgroundImg1}
        alt="Background"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-darkShade opacity-80" />
      <div className="relative z-10 w-[90%] md:w-[80%] mx-auto py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-darkYellow">Humanity Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-8 rounded-lg bg-dark bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 h-full"
            >
              <div className="w-20 h-20 md:w-22 lg:w-24 md:h-22 lg:h-24 flex items-center justify-center mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-white text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanityServiceCard; 