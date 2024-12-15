import PropTypes from "prop-types";
import { PAYMENT_CHANNELS } from "../../../services/payment/paymentTypes";

export const PaymentForm = ({
  onSubmit,
  paymentData,
  setPaymentData,
  amount,
  isLoading,
  onCancel,
}) => {
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
            onChange={(e) =>
              setPaymentData((prev) => ({
                ...prev,
                payer: e.target.value,
              }))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter mobile number"
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow hover:text-dark
                        transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
