import React, { useState } from "react";
import bookImg from '../assets/Delkom11.jpg'

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

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Fundraising Categories Section */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-7xl w-full mb-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Make a Donation
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-300">
          Fundraising Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-700 p-4 rounded-lg text-center shadow-md">
            <img
              src={bookImg}
              alt="Buy Stationery"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold text-white">Buy Stationery</h3>
            <p className="text-gray-200">
              Help us provide essential stationery for children.
            </p>
            <button
              onClick={() => handleFixedDonation(20)}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 mt-2"
            >
              Donate GH₵10
            </button>
          </div>
          <div className="bg-blue-700 p-4 rounded-lg text-center shadow-md">
            <img
              src={bookImg}
              alt="Donate Clothing"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold text-white">
              Donate Clothing
            </h3>
            <p className="text-gray-200">
              Support our clothing drive for those in need.
            </p>
            <button
              onClick={() => handleFixedDonation(30)}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 mt-2"
            >
              Donate GH₵20
            </button>
          </div>
          <div className="bg-blue-700 p-4 rounded-lg text-center shadow-md">
            <img
              src={bookImg}
              alt="Donate Food"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold text-white">Donate Food</h3>
            <p className="text-gray-200">
              Help us provide meals for families in need.
            </p>
            <button
              onClick={() => handleFixedDonation(50)}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 mt-2"
            >
              Donate GH₵20
            </button>
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-300">
          Custom Donation Amount
        </h2>
        <form
          onSubmit={handleCustomDonation}
          className="flex flex-col items-center"
        >
          <input
            type="number"
            value={customAmount}
            onChange={handleCustomAmountChange}
            placeholder="Enter your custom amount"
            className="border border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs mb-4 text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-500 transition duration-300 w-full max-w-xs"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
