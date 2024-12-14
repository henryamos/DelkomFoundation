import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { verifyPayment, pollPaymentStatus, getPaymentStatusText } from '../services/paymentService';

const PaymentVerification = ({ externalRef, onSuccess, onError }) => {
    const [otpCode, setOtpCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [verificationStep, setVerificationStep] = useState('otp'); // 'otp' or 'waiting'
    const [transactionId, setTransactionId] = useState(null);

    const handleVerification = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Verify OTP
            const verifyResponse = await verifyPayment(externalRef, otpCode);
            toast.info(verifyResponse.message);
            setTransactionId(verifyResponse.transactionId);
            setVerificationStep('waiting');

            // Start polling for payment status
            const paymentResult = await pollPaymentStatus(externalRef, verifyResponse.transactionId);
            
            if (paymentResult.success) {
                toast.success('Payment completed successfully!');
                onSuccess?.(paymentResult.data);
            } else {
                toast.error('Payment was not completed');
                onError?.('Payment verification failed');
            }
        } catch (error) {
            toast.error(error.message || 'Verification failed');
            onError?.(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (verificationStep === 'waiting') {
        return (
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold mb-2">
                        Waiting for Payment Approval
                    </h3>
                    <p className="text-gray-600">
                        Please approve the payment prompt on your phone.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Enter Verification Code</h2>
            <p className="text-gray-600 mb-4">
                Please enter the verification code sent to your phone.
            </p>
            <form onSubmit={handleVerification} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Verification Code
                    </label>
                    <input
                        type="text"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter OTP code"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-dark text-white py-2 px-4 rounded-md hover:bg-darkYellow 
                    transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {isLoading ? 'Verifying...' : 'Verify Payment'}
                </button>
            </form>
        </div>
    );
};

export default PaymentVerification; 