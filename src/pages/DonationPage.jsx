import React, { useState } from "react";

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
    <div className="bg-overlayPrimary min-h-screen flex items-center justify-center p-4">
      <div className="bg-primary shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Make a Donation</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Fixed Donation Options</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleFixedDonation(10)}
              className="bg-dark text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              $10
            </button>
            <button
              onClick={() => handleFixedDonation(25)}
              className="bg-dark text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              $25
            </button>
            <button
              onClick={() => handleFixedDonation(50)}
              className="bg-dark text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              $50
            </button>
            <button
              onClick={() => handleFixedDonation(100)}
              className="bg-dark text-white py-3 rounded-lg hover:bg-bgDark transition duration-300"
            >
              $100
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Custom Donation Amount</h2>
          <form onSubmit={handleCustomDonation} className="flex flex-col items-center">
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Enter your custom amount"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs mb-4"
              required
            />
            <button
              type="submit"
              className="bg-dark text-white py-3 px-4 rounded-lg hover:bg-bgDark transition duration-300 w-full max-w-xs"
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
