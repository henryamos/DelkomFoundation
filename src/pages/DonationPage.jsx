import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import PaymentFlow from '../components/payment/PaymentFlow';
import bookImg from "../assets/books.jpg";
import clothing from "../assets/cloths.jpg";
import food from "../assets/foodd.jpg";

const DonationPage = () => {
	const [showPaymentModal, setShowPaymentModal] = useState(false);
	const [selectedAmount, setSelectedAmount] = useState(null);
	const [customAmount, setCustomAmount] = useState('');

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};

	// Handle fixed donation buttons
	const handleFixedDonation = (amount) => {
		setSelectedAmount(amount);
		setShowPaymentModal(true);
	};

	// Handle custom donation amount change
	const handleCustomAmountChange = (e) => {
		setCustomAmount(e.target.value);
	};

	// Handle custom donation submission
	const handleCustomDonation = (e) => {
		e.preventDefault();
		const amount = parseFloat(customAmount);
		
		if (amount && amount >= 2) {
			setSelectedAmount(amount);
			setShowPaymentModal(true);
		} else {
			toast.error("Please enter a valid amount (minimum GH₵2).");
		}
	};

	// Handle payment success
	const handlePaymentSuccess = (transactionDetails) => {
		toast.success(`Thank you for your donation of GH₵${transactionDetails.amount}!`);
		setShowPaymentModal(false);
		setCustomAmount('');
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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
					<motion.div
						className="bg-primary p-3 rounded-lg text-center shadow-md"
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
						<h3 className="text-lg mt-4 font-bold text-dark">
							Donate Stationery
						</h3>
						<p className="text-overlay mt-1">
							Help us provide essential stationery for children.
						</p>
						<button
							onClick={() => handleFixedDonation(15)}
							className="bg-dark text-white hover:bg-darkYellow hover:text-dark py-2 px-4 rounded-lg transition duration-300 mt-4"
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
						<h3 className="text-lg mt-4 font-bold text-dark">
							Donate Clothing
						</h3>
						<p className="text-overlay mt-2">
							Support our clothing drive for those in need.
						</p>
						<button
							onClick={() => handleFixedDonation(20)}
							className="bg-dark hover:bg-darkYellow text-white hover:text-dark py-2 px-4 rounded-lg transition duration-300 mt-4"
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
						<h3 className="text-lg mt-4 font-bold text-dark">
							Donate Food
						</h3>
						<p className="text-overlay mt-2">
							Help us provide meals for families in need.
						</p>
						<button
							onClick={() => handleFixedDonation(20)}
							className="bg-dark hover:bg-darkYellow text-white hover:text-dark py-2 px-4 rounded-lg transition duration-300 mt-4"
						>
							Donate GH₵20
						</button>
					</motion.div>
				</div>
			</div>

			{/* Custom Donation Form */}
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
						min="1"
						step="any"
						value={customAmount}
						onChange={handleCustomAmountChange}
						placeholder="Enter your custom amount (min. GH₵2)"
						className="rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-darkYellow w-full max-w-xs mb-4 text-gray-900"
						required
					/>
					<button
						type="submit"
						className="bg-darkYellow text-dark hover:bg-primary py-3 px-4 rounded-lg transition duration-300 w-full max-w-xs"
					>
						Donate
					</button>
				</form>
			</div>

			{/* Payment Modal */}
			{showPaymentModal && <PaymentModal />}
		</div>
	);
};

export default DonationPage;
