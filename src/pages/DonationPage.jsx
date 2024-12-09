import { useState } from "react";
import { motion } from "framer-motion";
import bookImg from '../assets/books.jpg'
import clothing from '../assets/cloths.jpg'
import food from '../assets/foodd.jpg'


const DonationPage = () => {
  const [customAmount, setCustomAmount] = useState("");

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handleFixedDonation = (amount) => {
    alert(`Thank you for your generous donation of $${amount}!`);
    // Here you can add logic to handle the donation (e.g., redirect to payment processing)
  };

  const handleCustomDonation = (e) => {
    e.preventDefault();
    if (customAmount) {
      alert(`Thank you for your generous donation of $${customAmount}!`);
      // Here you can add logic to handle the donation (e.g., redirect to payment processing)
    } else {
      alert("Please enter a valid amount.");
    }
  };

  // Animation variants for pop-in effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Start off-screen and smaller
    visible: { opacity: 1, scale: 1 }, // Scale to full size and full opacity
  };

  return (
    <div className="bg-overlayPrimary min-h-screen flex flex-col items-center justify-center p-4">
      {/* Fundraising Categories Section */}
      <div className="bg-overlay shadow-lg rounded-lg px-4 py-24 max-w-full w-full mb-8">
        <h1 className="headings font-bold mb-6 text-center text-white">
          Make a <span className="text-darkYellow">Donation</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-300">
          Fundraising <span className="text-darkYellow">Categories</span>
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-3">
          <motion.div
            className="bg-primary  p-3 rounded-lg text-center shadow-md"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={bookImg}
              alt="Buy Stationery"
              className="w-full h-44 object-cover rounded-t-md"
            />
            <h3 className="text-lg  mt-4 font-bold text-dark">
              Donate Stationery
            </h3>
            <p className="text-overlay mt-1">
              Help us provide essential stationery for children.
            </p>
            <button
              onClick={() => handleFixedDonation(20)}
              className="bg-dark  text-white hover:bg-darkYellow hover:text-dark py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 mt-4"
            >
              Donate GH₵15
            </button>
          </motion.div>
          <motion.div
            className="bg-primary p-3 rounded-lg text-center shadow-md"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={clothing}
              alt="Donate Clothing"
              className="w-full h-44 object-cover rounded-t-md"
            />
            <h3 className="text-lg  mt-4 font-bold text-dark">
              Donate Clothing
            </h3>
            <p className="text-overlay mt-2">
              Support our clothing drive for those in need.
            </p>
            <button
              onClick={() => handleFixedDonation(30)}
              className="bg-dark hover:bg-darkYellow text-white hover:text-dark py-2 px-4 rounded-lg  transition duration-300 mt-4"
            >
              Donate GH₵20
            </button>
          </motion.div>
          <motion.div
            className="bg-primary p-3 rounded-lg text-center shadow-md"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={food}
              alt="Donate Food"
              className="w-full h-44 object-cover rounded-t-md"
            />
            <h3 className="text-lg mt-4 font-bold text-dark">Donate Food</h3>
            <p className="text-overlay mt-2">
              Help us provide meals for families in need.
            </p>
            <button
              onClick={() => handleFixedDonation(50)}
              className="bg-dark hover:bg-darkYellow  text-white hover:text-dark py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 mt-4"
            >
              Donate GH₵20
            </button>
          </motion.div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="bg-overlayPrimary shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
          Custom Donation <span className="text-darkYellow">Amount</span>
        </h2>
        <form
          onSubmit={handleCustomDonation}
          className="flex flex-col items-center"
        >
          <input
            type="number"
            min={10}
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder="Enter your custom amount"
            className=" rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-darkYellow w-full max-w-xs mb-4 text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-darkYellow text-dark hover:bg-primary py-3 px-4 rounded-lg  transition duration-300 w-full max-w-xs"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
