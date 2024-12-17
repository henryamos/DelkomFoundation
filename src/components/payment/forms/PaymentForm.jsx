import PropTypes from "prop-types";
import { useState } from "react";
import { PAYMENT_CHANNELS } from "../../../services/payment/paymentTypes";

export const PaymentForm = ({
  onSubmit,
  paymentData,
  setPaymentData,
  amount,
  isLoading,
  onCancel,
}) => {
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
    
    // Limit to 10 digits
    if (value.length <= 10) {
      setPaymentData((prev) => ({
        ...prev,
        payer: value,
      }));
    }

    // Validate phone number format
    if (value.length > 0) {
      if (value.length !== 10) {
        setPhoneError("Phone number must be 10 digits");
      } else if (!value.startsWith('0')) {
        setPhoneError("Phone number must start with 0");
      } else if (!/^0[2-9]/.test(value)) {
        setPhoneError("Invalid phone number format");
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("");
    }
  };

  const isValidPhone = paymentData.payer.length === 10 && 
                      paymentData.payer.startsWith('0') && 
                      /^0[2-9]/.test(paymentData.payer);

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Amount display */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount to Pay
          </label>
          <input
            type="text"
            value={`GH₵${amount}`}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-50"
            disabled
          />
        </div>

        {/* Network Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Network
          </label>
          <select
            value={paymentData.channel}
            onChange={(e) =>
              setPaymentData((prev) => ({
                ...prev,
                channel: e.target.value,
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select network</option>
            {Object.entries(PAYMENT_CHANNELS).map(([name, value]) => (
              <option key={value} value={value}>
                {name.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            value={paymentData.payer}
            onChange={handlePhoneChange}
            className={`w-full p-2 border rounded-md ${
              phoneError ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            pattern="0[2-9][0-9]{8}"
            inputMode="numeric"
            required
          />
          {phoneError && (
            <p className="mt-1 text-sm text-red-600">{phoneError}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Format: 0XX XXXXXXX (10 digits)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isLoading || !isValidPhone || !paymentData.channel}
            className="flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow hover:text-dark
                      transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Pay Now"}
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

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  paymentData: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    payer: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
  }).isRequired,
  setPaymentData: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};
