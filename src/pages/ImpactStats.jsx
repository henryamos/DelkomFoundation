const ImpactStats = () => {
  return (
    <section className="bg-black bg-opacity-80 py-12 md:py-16">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h2 className="headings font-bold text-white text-center mb-12">
          How We Make <span className="text-darkYellow">Difference</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-3xl lg:text-4xl font-bold text-black w-32 h-32 flex items-center justify-center">
              700+
            </div>
            <p className="mt-4 text-xl md:text-2xl text-white whitespace-nowrap">
              Needy Children Fed
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-3xl lg:text-4xl font-bold text-black w-32 h-32 flex items-center justify-center">
              500+
            </div>
            <p className="mt-4 text-xl md:text-2xl text-white whitespace-nowrap">
              Clothes Donated
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-3xl lg:text-4xl font-bold text-black w-32 h-32 flex items-center justify-center">
              1.5K+
            </div>
            <p className="mt-4 text-xl md:text-2xl text-white whitespace-nowrap">
              Books Donated
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-darkYellow p-6 rounded-lg text-2xl md:text-3xl lg:text-4xl font-bold text-black w-32 h-32 flex items-center justify-center">
              500+
            </div>
            <p className="mt-4 text-xl md:text-2xl text-white whitespace-nowrap">
              Young Kids Mentored
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
