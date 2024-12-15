import { useState } from "react";
import { toast } from "react-toastify";
import {
  initiatePayment,
  verifyPayment,
  pollPaymentStatus,
} from "../services/payment/paymentService";
import { PAYMENT_STEPS } from "../services/payment/paymentTypes";

export const usePayment = (initialAmount) => {
  const [step, setStep] = useState(PAYMENT_STEPS.INITIATE);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    amount: initialAmount,
    payer: "",
    channel: "",
  });
  const [verificationData, setVerificationData] = useState({
    externalRef: "",
    otpCode: "",
  });
  const [transactionDetails, setTransactionDetails] = useState(null);

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await initiatePayment(paymentData);
      setVerificationData((prev) => ({
        ...prev,
        externalRef: response.externalRef,
      }));
      toast.success(response.message);
      setStep(PAYMENT_STEPS.VERIFY);
    } catch (error) {
      toast.error(error.response?.data?.message || "Payment initiation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const verifyResponse = await verifyPayment(
        verificationData.externalRef,
        verificationData.otpCode
      );

      toast.info("Please approve the payment on your phone");
      setStep(PAYMENT_STEPS.WAITING);

      const paymentResult = await pollPaymentStatus(
        verificationData.externalRef
      );

      if (paymentResult.success) {
        setTransactionDetails(paymentResult.data);
        toast.success(
          paymentResult.message || "Payment completed successfully!"
        );
        setStep(PAYMENT_STEPS.SUCCESS);
      } else {
        toast.error(paymentResult.message || "Payment was not completed");
        setStep(PAYMENT_STEPS.INITIATE);
      }
    } catch (error) {
      toast.error(error.message || "Verification failed");
      setStep(PAYMENT_STEPS.VERIFY);
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};
