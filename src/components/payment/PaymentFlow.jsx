import PropTypes from "prop-types";
import { PaymentForm } from "./forms/PaymentForm";
import { VerificationForm } from "./forms/VerificationForm";
import { LoadingScreen } from "./screens/LoadingScreen";
import { SuccessScreen } from "./screens/SuccessScreen";
import { usePayment } from "../../hook/usePayment";
import { PAYMENT_STEPS } from "../../services/payment/paymentTypes";

const PaymentFlow = ({ amount, onSuccess, onCancel }) => {
  const {
    step,
    setStep,
    isLoading,
    paymentData,
    setPaymentData,
    verificationData,
    setVerificationData,
    transactionDetails,
    handlePaymentSubmit,
    handleVerification,
  } = usePayment(amount);

  // Handle cancellation with step reset
  const handleCancel = () => {
    setStep(PAYMENT_STEPS.INITIATE);
    onCancel();
  };

  // Handle success completion
  const handleSuccess = () => {
    onSuccess?.(transactionDetails);
  };

  // Render different steps using components
  switch (step) {
    case PAYMENT_STEPS.VERIFY:
      return (
        <VerificationForm
          onSubmit={handleVerification}
          verificationData={verificationData}
          setVerificationData={setVerificationData}
          isLoading={isLoading}
          onCancel={handleCancel}
        />
      );

    case PAYMENT_STEPS.WAITING:
      return <LoadingScreen onCancel={() => setStep(PAYMENT_STEPS.INITIATE)} />;

    case PAYMENT_STEPS.SUCCESS:
      return (
        <SuccessScreen
          transactionDetails={transactionDetails}
          amount={amount}
          onClose={handleSuccess}
        />
      );

    default: // PAYMENT_STEPS.INITIATE
      return (
        <PaymentForm
          onSubmit={handlePaymentSubmit}
          paymentData={paymentData}
          setPaymentData={setPaymentData}
          amount={amount}
          isLoading={isLoading}
          onCancel={handleCancel}
        />
      );
  }
};

PaymentFlow.propTypes = {
  amount: PropTypes.number.isRequired,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
};

export default PaymentFlow;
