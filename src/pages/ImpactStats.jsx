

const ImpactStats = () => {
  return (
    <div className="bg-black bg-opacity-80   py-6 md:py-14">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className=" headings font-bold text-white mb-8">
          How We Make <span className="text-darkYellow">Difference</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-4xl font-bold text-black">
              700+
            </div>
            <p className="mt-4 md:text-2xl text-white">Needy Children Fed</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl  md:text-4xl font-bold text-black">
              500+
            </div>
            <p className="mt-4 md:text-2xl text-white">Clothes Donated</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-4xl font-bold text-black">
              1.5K+
            </div>
            <p className="mt-4 md:text-2xl text-white">Books Donated</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-4xl font-bold text-black">
              500+
            </div>
            <p className="mt-4 md:text-2xl text-white">Young Kids Mentored</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;
