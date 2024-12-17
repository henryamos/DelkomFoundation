import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import analytics from "../services/analytic/analytics";

import PaymentFlow from "../components/payment/PaymentFlow";
import bookImg from "../assets/books.jpg";
import clothing from "../assets/cloths.jpg";
import food from "../assets/foodd.jpg";

const DonationPage = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle fixed donation buttons
  const handleFixedDonation = (amount) => {
    setSelectedAmount(amount);
    setShowPaymentModal(true);
  };

  // Handle custom donation amount change
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setCustomAmount(value);
    }
  };

  // Handle custom donation submission
  const handleCustomDonation = (e) => {
    e.preventDefault();
    const amount = parseFloat(customAmount);

    if (!amount || isNaN(amount)) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (amount < 2) {
      toast.error("Minimum donation amount is GH₵2");
      return;
    }

    setSelectedAmount(amount);
    setShowPaymentModal(true);
  };

  // Handle payment success
  const handlePaymentSuccess = (transactionDetails) => {
    toast.success(
      `Thank you for your donation of GH₵${transactionDetails.amount}!`
    );
    setShowPaymentModal(false);
    setCustomAmount("");
    setSelectedAmount(null);
  };

  // Handle payment cancellation
  const handlePaymentCancel = () => {
    setShowPaymentModal(false);
    setSelectedAmount(null);
  };

  // Payment Modal Component
  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Complete Your Donation</h2>
          <PaymentFlow
            amount={selectedAmount}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </div>
      </div>
    </div>
  );

  // Predefined donation amounts
  const donationAmounts = [10, 20, 50, 100];

  useEffect(() => {
    analytics.pageview();
  }, []);

  const handleDonation = (amount) => {
    analytics.event("Donation", "Initiate", `Amount: ${amount}`);
    // ... rest of your code
  };

  return (
    <div className="bg-overlayPrimary min-h-screen py-12 md:py-16">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h1 className="headings font-bold mb-6 text-center text-white">
          Make a <span className="text-darkYellow">Donation</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-300">
          Fundraising <span className="text-darkYellow">Categories</span>
        </h2>

        {/* Fundraising Categories - Removed extra container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <motion.div
            className="bg-primary p-8 sm:p-6 rounded-md shadow-md w-[95%] mx-auto md:w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={bookImg}
              alt="Buy Stationery"
              className="w-full h-52 sm:h-48 object-cover rounded-sm mb-4"
            />
            <h3 className="text-xl font-bold text-dark mb-2">
              Donate Stationery
            </h3>
            <p className="text-overlay mb-4">
              Help us provide essential stationery for children.
            </p>
            <button
              onClick={() => handleFixedDonation(15)}
              className="w-full bg-dark text-white hover:bg-darkYellow hover:text-dark py-3 sm:py-2 px-4 rounded-lg transition duration-300"
            >
              Donate GH₵15
            </button>
          </motion.div>

          <motion.div
            className="bg-primary p-8 sm:p-6 rounded-md shadow-md w-[95%] mx-auto md:w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={clothing}
              alt="Donate Clothing"
              className="w-full h-52 sm:h-48 object-cover rounded-sm mb-4"
            />
            <h3 className="text-xl font-bold text-dark mb-2">
              Donate Clothing
            </h3>
            <p className="text-overlay mb-4">
              Support our clothing drive for those in need.
            </p>
            <button
              onClick={() => handleFixedDonation(20)}
              className="w-full bg-dark hover:bg-darkYellow text-white hover:text-dark py-3 sm:py-2 px-4 rounded-lg transition duration-300"
            >
              Donate GH₵20
            </button>
          </motion.div>

          <motion.div
            className="bg-primary p-8 sm:p-6 rounded-md shadow-md w-[95%] mx-auto md:w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              src={food}
              alt="Donate Food"
              className="w-full h-52 sm:h-48 object-cover rounded-sm mb-4"
            />
            <h3 className="text-xl font-bold text-dark mb-2">Donate Food</h3>
            <p className="text-overlay mb-4">
              Help us provide meals for families in need.
            </p>
            <button
              onClick={() => handleFixedDonation(20)}
              className="w-full bg-dark hover:bg-darkYellow text-white hover:text-dark py-3 sm:py-2 px-4 rounded-lg transition duration-300"
            >
              Donate GH₵20
            </button>
          </motion.div>
        </div>

        {/* Suggested Amounts Section */}
        <div className="bg-darkShade shadow-lg rounded-lg p-6 md:p-8 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">
            Suggested <span className="text-darkYellow">Amounts</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {donationAmounts.map((amount) => (
              <motion.button
                key={amount}
                onClick={() => handleFixedDonation(amount)}
                className="bg-dark text-white py-4 px-8 rounded-lg 
									 hover:bg-darkYellow hover:text-dark 
									 transition-colors text-lg font-semibold
									 min-w-[120px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                GH₵{amount}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Custom Donation Form */}
        <div className="bg-darkShade shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
            Custom Donation <span className="text-darkYellow">Amount</span>
          </h2>
          <form
            onSubmit={handleCustomDonation}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-xs mb-4">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                GH₵
              </span>
              <input
                type="number"
                step="any"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter amount (min. GH₵2)"
                className="w-full pl-12 pr-4 py-3 rounded-lg
										 focus:outline-none focus:ring-2 focus:ring-darkYellow 
										 text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="w-full max-w-xs bg-darkYellow text-dark hover:bg-dark 
									 hover:text-white py-3 px-4 rounded-lg 
									 transition duration-300"
            >
              Donate
            </button>
          </form>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && <PaymentModal />}
    </div>
  );
};

export default DonationPage;
