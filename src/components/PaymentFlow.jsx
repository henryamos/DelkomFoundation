import { useState } from 'react';
import { toast } from 'react-toastify';
import { initiatePayment, verifyPayment, pollPaymentStatus } from '../services/paymentService';

const PaymentFlow = ({ amount, onSuccess, onCancel }) => {
    const [step, setStep] = useState('initiate'); // 'initiate', 'verify', or 'waiting'
    const [isLoading, setIsLoading] = useState(false);
    const [paymentData, setPaymentData] = useState({
        amount: amount,
        payer: '',
        channel: ''
    });
    const [verificationData, setVerificationData] = useState({
        externalRef: '',
        otpCode: ''
    });
    const [transactionComplete, setTransactionComplete] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState(null);

    // Update the polling function to check payment status
    const checkPaymentStatus = async (externalRef, transactionId) => {
        try {
            const result = await pollPaymentStatus(externalRef, transactionId);
            // Check for successful status code (1)
            if (result.status === 1 || result.status === 'success') {
                setTransactionComplete(true);
                toast.success('Payment completed successfully!');
                onSuccess?.();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Payment status check error:', error);
            return false;
        }
    };

    // Handle initial payment submission
    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await initiatePayment(paymentData);
            setVerificationData(prev => ({
                ...prev,
                externalRef: response.externalRef
            }));
            toast.success(response.message);
            setStep('verify');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Payment initiation failed');
        } finally {
            setIsLoading(false);
        }
    };

    // Update verification handler
    const handleVerification = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const verifyResponse = await verifyPayment(
                verificationData.externalRef, 
                verificationData.otpCode
            );
            
            toast.info('Please approve the payment on your phone');
            setStep('waiting');

            try {
                // Start polling with the externalRef
                const paymentResult = await pollPaymentStatus(verificationData.externalRef);

                if (paymentResult.success) {
                    setTransactionDetails(paymentResult.data);
                    setTransactionComplete(true);
                    toast.success('Payment completed successfully!');
                    setTimeout(() => {
                        onSuccess?.(paymentResult.data);
                    }, 2000);
                } else {
                    toast.error('Payment was not completed');
                    setStep('initiate');
                }
            } catch (pollError) {
                if (pollError.message === 'Payment verification timeout') {
                    toast.error('Payment approval timeout. Please try again.');
                } else {
                    toast.error(pollError.message || 'Payment failed');
                }
                setStep('initiate');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Verification failed');
            setStep('verify');
        } finally {
            setIsLoading(false);
        }
    };

    // Render different steps
    if (step === 'verify') {
        return (
            <div className="p-6 bg-white rounded-lg">
                <h2 className="text-xl font-bold mb-4">Enter Verification Code</h2>
                <p className="text-gray-600 mb-4">
                    Please enter the verification code sent to your phone.
                </p>
                <form onSubmit={handleVerification} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={verificationData.otpCode}
                            onChange={(e) => setVerificationData(prev => ({
                                ...prev,
                                otpCode: e.target.value
                            }))}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter OTP code"
                            required
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow 
                            transition-colors"
                        >
                            {isLoading ? 'Verifying...' : 'Verify Code'}
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
    }

    if (step === 'waiting') {
        if (transactionComplete) {
            return (
                <div className="p-6 bg-white rounded-lg text-center">
                    <div className="text-green-500 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-green-600">
                        Payment Successful!
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Thank you for your donation of GH₵{amount}
                    </p>
                    <button
                        onClick={onCancel}
                        className="bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow transition-colors"
                    >
                        Close
                    </button>
                </div>
            );
        }

        return (
            <div className="p-6 bg-white rounded-lg text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">
                    Waiting for Payment Approval
                </h3>
                <p className="text-gray-600">
                    Please approve the payment prompt on your phone.
                </p>
                <button
                    onClick={() => setStep('initiate')}
                    className="mt-4 text-dark hover:text-darkYellow underline"
                >
                    Cancel Payment
                </button>
            </div>
        );
    }

    // Initial payment form
    return (
        <div className="p-6 bg-white rounded-lg">
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
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
                        onChange={(e) => setPaymentData(prev => ({
                            ...prev,
                            channel: e.target.value
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select network</option>
                        <option value="13">MTN Mobile Money</option>
                        <option value="6">Telecel</option>
                        <option value="7">AirtelTigo Money</option>
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
                        onChange={(e) => setPaymentData(prev => ({
                            ...prev,
                            payer: e.target.value
                        }))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter mobile number"
                        required
                    />
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow 
                        transition-colors"
                    >
                        {isLoading ? 'Processing...' : 'Pay Now'}
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

export default PaymentFlow; 