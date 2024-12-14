import { api } from "./Config";

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

// Payment Callback Check
export const checkPaymentCallback = async (externalRef, transactionId) => {
  try {
    const payload = {
      externalref: externalRef,
      transactionid: transactionId,
    };

    const response = await api.post("/callback", payload);
    return {
      success: response.data.data.txstatus === 1,
      data: response.data.data,
    };
  } catch (error) {
    console.error("Payment callback check error:", error);
    throw error;
  }
};

// Poll for payment status
export const pollPaymentStatus = async (
  externalRef,
  transactionId,
  maxAttempts = 10
) => {
  let attempts = 0;

  const checkStatus = async () => {
    try {
      const result = await checkPaymentCallback(externalRef, transactionId);
      if (result.success) {
        return result;
      }

      if (attempts >= maxAttempts) {
        throw new Error("Payment verification timeout");
      }

      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds
      return checkStatus();
    } catch (error) {
      throw error;
    }
  };

  return checkStatus();
};

// Helper to get payment status text
export const getPaymentStatusText = (txstatus) => {
  switch (txstatus) {
    case 1:
      return "Payment Successful";
    case 0:
      return "Payment Pending";
    case -1:
      return "Payment Failed";
    default:
      return "Unknown Status";
  }
};
