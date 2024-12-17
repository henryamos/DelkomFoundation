import { api } from "../Config";

// Payment Channels
export const PAYMENT_CHANNELS = {
  MTN: 13,
  TELECEL: 6,
  AIRTELTIGO: 7,
};

// Custom error messages
const ERROR_MESSAGES = {
  TP15: "Invalid verification code. Please check and try again.",
  INVALID_OTP_LENGTH: "Please enter a 6-digit verification code.",
  INVALID_PHONE: "Please enter a valid phone number.",
  DEFAULT: "An error occurred. Please try again."
};

// Payment Initiation with better error handling
export const initiatePayment = async (paymentData) => {
  try {
    const payload = {
      amount: parseFloat(paymentData.amount),
      payer: paymentData.payer.replace(/\s+/g, ""),
      channel: parseInt(paymentData.channel),
    };

    const response = await api.post("/payment", payload);
    
    // Extract externalRef from the correct location in the response
    const externalRef = response.data?.data?.externalRef || response.data?.externalRef;
    
    if (!externalRef) {
      console.error('Payment Response:', response.data);
      throw new Error("Payment reference not received from server");
    }

    return {
      ...response.data,
      externalRef // Ensure externalRef is at the top level
    };
  } catch (error) {
    console.error("Payment initiation error:", error);
    const errorData = error.response?.data;
    
    if (errorData?.errors) {
      const validationError = errorData.errors[0];
      if (validationError.path === 'payer') {
        throw new Error("Please enter a valid phone number");
      }
    }

    throw new Error(errorData?.message || ERROR_MESSAGES.DEFAULT);
  }
};

// Payment Verification with improved error handling
export const verifyPayment = async (externalRef, otpCode) => {
  try {
    // Additional validation and logging
    if (!externalRef) {
      console.error('Missing externalRef in verification request');
      throw new Error("Payment reference is required");
    }

    // Format the request payload
    const payload = {
      externalRef: String(externalRef).trim(),
      otpcode: String(otpCode).trim()
    };

    console.log('Verification payload:', payload);

    const response = await api.post("/verify", payload);
    return response.data;
  } catch (error) {
    console.error("Verification error details:", {
      error,
      response: error.response?.data,
      externalRef
    });

    if (error.response?.data?.errors) {
      const validationErrors = error.response.data.errors;
      const refError = validationErrors.find(err => err.path === 'externalRef');
      
      if (refError) {
        throw new Error("Invalid or expired payment reference");
      }
    }

    throw error;
  }
};

// Check Payment Status with better error handling
export const checkPaymentStatus = async (externalRef) => {
  try {
    const response = await api.post("/status", { externalRef });
    console.log("Status Response:", response.data);

    const isSuccessful = response.data.data?.paymentStatus === "Successful";
    const isPending = response.data.data?.paymentStatus === "Pending";

    return {
      success: isSuccessful,
      pending: isPending,
      data: response.data.data,
      message: response.data.message,
    };
  } catch (error) {
    const errorData = error.response?.data;
    
    if (errorData?.data) {
      return {
        success: false,
        pending: false,
        data: errorData.data,
        message: errorData.message || "Payment check failed",
      };
    }

    return {
      success: false,
      pending: false,
      data: null,
      message: ERROR_MESSAGES.DEFAULT,
    };
  }
};

// Poll for payment status with improved error handling
export const pollPaymentStatus = async (externalRef, maxAttempts = 30) => {
  let attempts = 0;

  const checkStatus = async () => {
    try {
      if (attempts >= maxAttempts) {
        throw new Error("Payment verification timed out. Please check your transaction status later.");
      }

      const result = await checkPaymentStatus(externalRef);
      console.log("Poll result:", result);

      if (result.success) {
        return result;
      }

      if (!result.pending) {
        throw new Error(result.message || "Payment failed. Please try again.");
      }

      attempts++;
      await new Promise((resolve) => setTimeout(resolve, 8000));
      return checkStatus();
    } catch (error) {
      if (error.message.includes("timeout")) {
        throw error;
      }

      if (attempts < maxAttempts) {
        attempts++;
        await new Promise((resolve) => setTimeout(resolve, 8000));
        return checkStatus();
      }

      throw new Error("Payment verification failed. Please contact support if amount was deducted.");
    }
  };

  return checkStatus();
};

// Enhanced payment status text
export const getPaymentStatusText = (status) => {
  switch (status) {
    case "Successful":
      return "Payment Successful! Thank you for your donation.";
    case "Pending":
      return "Payment is being processed. Please wait...";
    case "Failed":
      return "Payment Failed. Please try again or contact support.";
    default:
      return "Unable to determine payment status. Please check your transaction history.";
  }
};
