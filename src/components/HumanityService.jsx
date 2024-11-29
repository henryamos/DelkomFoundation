 
import backgroundImg1 from '../assets/Delkom9.jpg';
import booking from '../assets/map_school.svg';
import clothing from '../assets/game-icons_clothes.svg';
import food from '../assets/fluent_food-24-filled.svg';

const HumanityServiceCard = () => {
  return (
    <div className="relative w-full h-screen md:h-[70vh] bg-bgDark">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src={backgroundImg1}
        alt="Background"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-80">
        <h2 className="headings font-bold text-center text-white mt-8 mb-4 md:mb-14">
          Our Services <span className="text-darkYellow"> To Humanity</span>
        </h2>
        <div
          className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto space-y-6 px-4 md:flex-row md:justify-between    md:space-y-0  lg:space-x-24
        "
        >
          {/* Charity for Food */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 ">
            <img className="w-10 md:w-20" src={food} alt="Charity For Food" />
            <h4 className="mt-2 mb-4 text-lg font-normal text-center text-white md:font-bold md:text-2xl">
              Charity For Food
            </h4>
            <p className="text-center text-white text-sm md:text-md">
              Our members volunteer to support and educate young children
              residing in rural areas
            </p>
          </div>
          {/* Charity for Clothes */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <img
              className="w-10 md:w-20"
              src={clothing}
              alt="Charity For Clothes"
            />
            <h4 className="mt-2 mb-4 text-lg font-normal text-center text-white md:font-bold md:text-2xl">
              Charity For Clothes
            </h4>
            <p className="text-center text-white text-sm md:text-md">
              Our members volunteer to support and educate young children
              residing in rural areas
            </p>
          </div>
          {/* Charity for Education */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2">
            <img
              className="w-10 md:w-20"
              src={booking}
              alt="Charity For Education"
            />
            <h4 className="mt-2 mb-4 text-lg font-normal text-center text-white md:font-bold md:text-2xl">
              Charity For Education
            </h4>
            <p className="text-center text-white text-sm md:text-md">
              Our members volunteer to support and educate young children
              residing in rural areas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanityServiceCard;
