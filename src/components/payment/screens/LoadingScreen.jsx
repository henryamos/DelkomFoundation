import PropTypes from "prop-types";

export const LoadingScreen = ({ onCancel }) => {
  return (
    <div className="p-6 bg-white rounded-lg text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark mx-auto mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">
        Waiting for Payment Approval
      </h3>
      <p className="text-gray-600 mb-2">
        Please approve the payment prompt on your phone.
      </p>
      <p className="text-sm text-gray-500 mb-4">
        This may take a few moments. Please don't close this window.
      </p>
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to cancel the payment?")) {
            onCancel();
          }
        }}
        className="text-dark hover:text-darkYellow underline"
      >
        Cancel Payment
      </button>
    </div>
  );
};

LoadingScreen.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
