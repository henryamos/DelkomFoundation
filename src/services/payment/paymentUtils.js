export const formatPhoneNumber = (number) => {
  return number.replace(/\s+/g, "");
};

export const validatePhoneNumber = (number) => {
  const phoneRegex = /^0[2-9][0-9]{8}$/;
  return phoneRegex.test(number);
};

export const formatAmount = (amount) => {
  return parseFloat(amount).toFixed(2);
};

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
