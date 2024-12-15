import PropTypes from 'prop-types';

const SubmissionSuccessModal = ({ isOpen, email, onClose }) => {
    const handleGoHome = () => {
        // First close the modal
        onClose?.();
        
        // Use the frontend URL
        const frontendUrl = 
          "https://delkomcharityfoundation.com/" || window.location.origin;
        
        // Navigate to the frontend home page
        window.location.href = frontendUrl;
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
                <div className="text-green-500 mb-4">
                    <svg
                        className="w-16 h-16 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-green-600">
                    Registration Successful!
                </h3>
                <p className="text-gray-600 mb-6">
                    Thank you for registering as a volunteer. A confirmation email has been sent to{' '}
                    <span className="font-semibold">{email}</span>. Please check your inbox for further instructions.
                </p>
                <div className="flex space-x-4 justify-center">
                    <button
                        onClick={handleGoHome}
                        className="bg-dark text-white py-2 px-4 rounded-md 
                                 hover:bg-darkYellow hover:text-dark transition-colors"
                    >
                        Go to Home
                    </button>
                    <button
                        onClick={onClose}
                        className="border border-dark text-dark py-2 px-4 rounded-md 
                                 hover:bg-gray-100 transition-colors"
                    >
                        Stay Here
                    </button>
                </div>
            </div>
        </div>
    );
};

SubmissionSuccessModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SubmissionSuccessModal; 