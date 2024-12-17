import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onCancel }) => {
  const [timeoutWarning, setTimeoutWarning] = useState(false);
  const TIMEOUT_DURATION = 30000; // 30 seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutWarning(true);
    }, TIMEOUT_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel the payment?")) {
      onCancel();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark mx-auto mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">
        Waiting for Payment Approval
      </h3>
      <p className="text-gray-600 mb-2">
        Please approve the payment prompt on your phone.
      </p>
      {timeoutWarning ? (
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
          <p className="font-medium">Taking longer than expected?</p>
          <p className="text-sm mt-1">
            If you haven't received a prompt or the payment failed, please try again.
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-500 mb-4">
          This may take a few moments. Please don't close this window.
        </p>
      )}
      <button
        onClick={handleCancel}
        className="mt-4 text-dark hover:text-darkYellow underline"
      >
        Cancel Payment
      </button>
    </div>
  );
};

LoadingScreen.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
