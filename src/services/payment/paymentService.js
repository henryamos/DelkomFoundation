import { api } from "../Config";

// Payment Channels
export const PAYMENT_CHANNELS = {
  MTN: 13,
  TELECEL: 6,
  AIRTELTIGO: 7,
};

// Payment Initiation
export const initiatePayment = async (paymentData) => {
  try {
    const payload = {
      amount: parseFloat(paymentData.amount),
      payer: paymentData.payer.replace(/\s+/g, ""),
      channel: parseInt(paymentData.channel),
    };

    const response = await api.post("/payment", payload);
    return response.data; // Returns { message, externalRef }
  } catch (error) {
    console.error("Payment initiation error:", error);
    throw error;
  }
};

// Payment Verification with OTP
export const verifyPayment = async (externalRef, otpCode) => {
  try {
    const payload = {
      externalRef,
      otpcode: otpCode,
    };

    const response = await api.post("/verify", payload);
    return response.data; // Returns { message, status, externalRef, transactionId }
  } catch (error) {
    console.error("Payment verification error:", error);
    throw error;
  }
};

// Check Payment Status
export const checkPaymentStatus = async (externalRef) => {
  try {
    const response = await api.post("/status", { externalRef });

    // Log the full response for debugging
    console.log("Status Response:", response.data);

    // Check if the payment is successful based on paymentStatus
    const isSuccessful = response.data.data?.paymentStatus === "Successful";
    const isPending = response.data.data?.paymentStatus === "Pending";

    return {
      success: isSuccessful,
      pending: isPending,
      data: response.data.data,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Payment status check error:", error);
    // If we have a response with payment status data, use it
    if (error.response?.data?.data) {
      return {
        success: false,
        pending: false,
        data: error.response.data.data,
        message: error.response.data.message || "Payment check failed",
      };
    }
    throw error;
  }
};

// Poll for payment status
export const pollPaymentStatus = async (externalRef, maxAttempts = 30) => {
  let attempts = 0;

  const checkStatus = async () => {
    try {
      if (attempts >= maxAttempts) {
        throw new Error("Payment verification timeout");
      }

      const result = await checkPaymentStatus(externalRef);
      console.log("Poll result:", result); // Debug log

      // If payment is successful
      if (result.success) {
        return result;
      }

      // If payment failed (not pending)
      if (!result.pending) {
        throw new Error(result.message || "Payment failed");
      }

      // If still pending, wait and try again
      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 8000));
      return checkStatus();
    } catch (error) {
      if (error.message === "Payment verification timeout") {
        throw error;
      }
      // For other errors, check if we should continue polling
      if (attempts < maxAttempts) {
        attempts++;
        await new Promise((resolve) => setTimeout(resolve, 8000));
        return checkStatus();
      }
      throw error;
    }
  };

  return checkStatus();
};

// Helper to get payment status text
export const getPaymentStatusText = (status) => {
  switch (status) {
    case "Successful":
      return "Payment Successful";
    case "Pending":
      return "Payment Pending";
    case "Failed":
      return "Payment Failed";
    default:
      return "Unknown Status";
  }
};
