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
      console.log("Payment initiation response:", response); // Debug log

      // Extract externalRef from the correct location in the response
      const ref = response.data?.externalRef || response.externalRef;
      
      if (!ref) {
        console.error("Payment Response:", response); // Debug log
        throw new Error("Payment reference not received from server");
      }

      // Update verification data with the new reference
      setVerificationData({
        externalRef: ref,
        otpCode: ""
      });
      
      toast.success(response.message || "Payment initiated successfully");
      setStep(PAYMENT_STEPS.VERIFY);
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error(error.message || "Payment initiation failed");
      setStep(PAYMENT_STEPS.INITIATE);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Debug log to check verification data
      console.log("Verification attempt with:", {
        externalRef: verificationData.externalRef,
        otpCode: verificationData.otpCode
      });

      if (!verificationData.externalRef) {
        throw new Error("Payment reference not found. Please try again");
      }

      const verifyResponse = await verifyPayment(
        verificationData.externalRef,
        verificationData.otpCode
      );

      toast.info("Please approve the payment on your phone");
      setStep(PAYMENT_STEPS.WAITING);

      const paymentResult = await pollPaymentStatus(
        verificationData.externalRef,
        15
      );

      if (paymentResult.success) {
        setTransactionDetails(paymentResult.data);
        toast.success(paymentResult.message || "Payment completed successfully!");
        setStep(PAYMENT_STEPS.SUCCESS);
      } else {
        toast.error(paymentResult.message || "Payment was not completed");
        setStep(PAYMENT_STEPS.INITIATE);
      }
    } catch (error) {
      console.error("Verification error:", error);
      const errorMessage = error.message || "Verification failed";
      toast.error(errorMessage);
      
      if (errorMessage.includes("reference")) {
        setStep(PAYMENT_STEPS.INITIATE);
      } else {
        setStep(PAYMENT_STEPS.VERIFY);
      }
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
