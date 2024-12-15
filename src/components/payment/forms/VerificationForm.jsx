import PropTypes from "prop-types";

export const VerificationForm = ({
  onSubmit,
  verificationData,
  setVerificationData,
  isLoading,
  onCancel,
}) => {
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
            onChange={(e) =>
              setVerificationData((prev) => ({
                ...prev,
                otpCode: e.target.value,
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter OTP code"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow 
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
    </div>
  );
};

VerificationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  verificationData: PropTypes.shape({
    externalRef: PropTypes.string.isRequired,
    otpCode: PropTypes.string.isRequired,
  }).isRequired,
  setVerificationData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};
