import PropTypes from "prop-types";
import { useEffect } from "react";

export const VerificationForm = ({
  onSubmit,
  verificationData,
  setVerificationData,
  isLoading,
  onCancel,
}) => {
  // Validate externalRef on mount
  useEffect(() => {
    if (!verificationData?.externalRef) {
      console.error('Missing externalRef in VerificationForm');
      onCancel(); // Go back to payment form if no externalRef
    }
  }, []);

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setVerificationData(prev => ({
      ...prev,
      otpCode: value
    }));
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Enter Verification Code</h2>
      <p className="text-gray-600 mb-4">
        Please enter the verification code sent to your phone.
      </p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={verificationData.otpCode}
            onChange={handleOTPChange}
            className="w-full p-2 border border-gray-300 rounded-md text-center text-lg"
            placeholder="Enter 6-digit code"
            maxLength={6}
            pattern="\d{6}"
            inputMode="numeric"
            required
            disabled={!verificationData.externalRef || isLoading}
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={!verificationData.externalRef || isLoading || verificationData.otpCode.length !== 6}
            className="flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow hover:text-dark
                      transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 border border-dark text-dark py-2 px-4 rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={onCancel}
          className="text-dark hover:text-darkYellow text-sm underline"
        >
          Didn't receive code? Try again
        </button>
      </div>
    </div>
  );
};

VerificationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  verificationData: PropTypes.shape({
    externalRef: PropTypes.string,
    otpCode: PropTypes.string,
  }).isRequired,
  setVerificationData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};
