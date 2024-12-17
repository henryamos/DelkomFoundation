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
        5
      );

      if (paymentResult.success) {
        setTransactionDetails(paymentResult.data);
        toast.success(paymentResult.message || "Payment completed successfully!");
        setStep(PAYMENT_STEPS.SUCCESS);
      } else {
        toast.error("Payment was not completed. Please try again.");
        setVerificationData({
          externalRef: "",
          otpCode: "",
        });
        setStep(PAYMENT_STEPS.INITIATE);
      }
    } catch (error) {
      console.error("Verification error:", error);
      const errorMessage = error.message || "Verification failed";
      toast.error(errorMessage);
      
      // Handle specific cases that should return to payment form
      if (
        errorMessage.includes("expired") ||
        errorMessage.includes("session") ||
        errorMessage.includes("timeout") ||
        errorMessage.includes("failed")
      ) {
        // Reset verification data
        setVerificationData({
          externalRef: "",
          otpCode: "",
        });
        setStep(PAYMENT_STEPS.INITIATE);
      } else if (errorMessage.includes("Invalid verification code")) {
        // Stay on verification form for invalid OTP
        setVerificationData(prev => ({
          ...prev,
          otpCode: "", // Clear only the OTP
        }));
      } else {
        setStep(PAYMENT_STEPS.VERIFY);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Add a function to handle payment failure
  const handlePaymentFailure = () => {
    setVerificationData({
      externalRef: "",
      otpCode: "",
    });
    setStep(PAYMENT_STEPS.INITIATE);
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
    handlePaymentFailure,
  };
};
