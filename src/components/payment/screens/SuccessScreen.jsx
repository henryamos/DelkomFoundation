import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const SuccessScreen = ({ transactionDetails, amount, onClose }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    onClose?.();
    const frontendUrl =
      "https://delkomcharityfoundation.com/" || window.location.origin;
    window.location.href = frontendUrl;
  };

  return (
    <div className="p-6 bg-white rounded-lg text-center">
      <div className="text-green-500 mb-4">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-green-600">
        Payment Successful!
      </h3>
      <div className="text-gray-600 space-y-2 mb-6">
        <p>Amount: GH₵{transactionDetails?.amount || amount}</p>
        {transactionDetails?.transactionId && (
          <p>Transaction ID: {transactionDetails.transactionId}</p>
        )}
        {transactionDetails?.payer && (
          <p>Phone Number: {transactionDetails.payer}</p>
        )}
      </div>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={handleGoHome}
          className="bg-dark text-white py-2 px-4 rounded-md 
                    hover:bg-darkYellow hover:text-dark transition-colors"
        >
          Go to Home
        </button>
        <button
          onClick={onClose}
          className="border border-dark text-dark py-2 px-4 rounded-md 
                    hover:bg-gray-100 transition-colors"
        >
          Stay Here
        </button>
      </div>
    </div>
  );
};

SuccessScreen.propTypes = {
  transactionDetails: PropTypes.shape({
    amount: PropTypes.number,
    transactionId: PropTypes.string,
    payer: PropTypes.string,
  }),
  amount: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};
